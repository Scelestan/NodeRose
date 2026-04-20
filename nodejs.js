const http = require('http');
const express = require('express');
const fs = require('fs');
const path = require('path');

var apps = express();
var Routerer = express.Router();

const Routerers = require('./routeOfLog.js');

function routes () {
	// Anti-doublons : évite d'enregistrer 2 fois la même route GET
	const createdRoutes = new Set();

function rangeRoutes (Str, extActive) {
	var initdoss = Str.split("*")[0];
	var initext = Str.split("*")[1];
	var initlistenRes = Str.split("*")[2].split("%");
	// Log lisible (évite la confusion quand plusieurs dossiers ont le même nom final: systems/, entities/, etc.)
	console.log("[rangeRoutes] doss=", initdoss, "ext=", initext, "count=", initlistenRes.length);
	for (var iL = 0; iL < initlistenRes.length; iL++) {
		CreateRoutes(initlistenRes[iL], initdoss, initext);
	}
function CreateRoutes (listenRes, doss, ext) {	
	// Détermine la route Express finale (la clé d'unicité)
	const routePath = extActive ? ("/" + listenRes + ext) : (doss + listenRes + ext);
	if (createdRoutes.has(routePath)) {
		// Si tu vois ce log, c'est qu'on essaye de déclarer 2x exactement le même endpoint
		console.log("[skip-duplicate-route]", routePath);
		return;
	}
	createdRoutes.add(routePath);

	if (extActive) {
		Routerer.get(routePath, function (req, res, next) {
			// GET "sécurisé" : on envoie un fichier relatif au dossier @src/ (root = __dirname)
			const fileRelPosix = path.posix.normalize(`${listenRes}${ext}`).replace(/^\/+/, '');
			const fileRelFs = path.join(...fileRelPosix.split('/'));
			res.sendFile(fileRelFs, { root: __dirname, dotfiles: 'deny' }, function () {});
		});
	} else {
		Routerer.get(routePath, function (req, res, next) {
			// GET "sécurisé" : on envoie un fichier relatif au dossier @src/ (root = __dirname)
			const fileRelPosix = path.posix
				.normalize(`${doss}/${listenRes}${ext}`)
				.replace(/^\/+/, '');
			const fileRelFs = path.join(...fileRelPosix.split('/'));
			res.sendFile(fileRelFs, { root: __dirname, dotfiles: 'deny' }, function () {});
		});	
	}
}
}

Routerer.get("/importModules", function (req, res, next) {
	res.sendFile(path.join('Game', 'importModules.js'), { root: __dirname, dotfiles: 'deny' }, function () {});
});
Routerer.get("/GameScene.js", function (req, res, next) {
	res.sendFile(path.join('scenes', 'GameScene.js'), { root: __dirname, dotfiles: 'deny' }, function () {});
});
// --------------------------------------------------------------------------------------
// Intégration automatisée des GET (Express) à partir de tous les nomDossier/nomFichier de @src/
// Format généré : "/SiDossier/etc/*<extension>*nomA%nomB%nomC"  OU  "*<extension>*nomA%nomB" (racine)
// --------------------------------------------------------------------------------------
const STATIC_ALLOWED_EXT = new Set([
	'.js', '.html', '.css',
	'.png', '.jpg', '.jpeg', '.webp', '.svg',
	'.json', '.md', '.wgsl', '.geojson'
]);

// Important : on évite d'exposer les fichiers serveur par des routes GET
const STATIC_EXCLUDE = new Set([
	'nodejs.js',
	'routeOfLog.js',
	'logSock.js',
	'package.json',
	'package-lock.json',
	'firstLog.js'
]);

function buildObjectsFromSrc () {
	/** @type {Map<string, {dirRel: string, ext: string, names: Set<string>}>} */
	const groups = new Map();

	function walk (relDir = '') {
		const absDir = path.join(__dirname, relDir);
		const entries = fs.readdirSync(absDir, { withFileTypes: true });

		for (const ent of entries) {
			if (ent.isDirectory()) {
				// On ignore les dossiers cachés (ex: .git) et node_modules
				if (ent.name === 'node_modules' || ent.name.startsWith('.')) continue;
				walk(path.join(relDir, ent.name));
				continue;
			}

			const relFile = path.join(relDir, ent.name);
			const relPosix = relFile.split(path.sep).join('/');
			if (STATIC_EXCLUDE.has(relPosix)) continue;

			const ext = path.extname(ent.name);
			if (!STATIC_ALLOWED_EXT.has(ext)) continue;

			const dirRel = path.dirname(relPosix); // '.' ou 'auth/design' etc.
			const base = path.basename(relPosix, ext);

			const key = `${dirRel}|${ext}`;
			if (!groups.has(key)) groups.set(key, { dirRel, ext, names: new Set() });
			groups.get(key).names.add(base);
		}
	}

	walk('');

	/** @type {string[]} */
	const objectsList = [];
	for (const g of groups.values()) {
		const names = [...g.names].sort().join('%');
		if (!names) continue;

		if (g.dirRel === '.' || g.dirRel === '') {
			objectsList.push(`*${g.ext}*${names}`);
		} else {
			const doss = `/${g.dirRel.replace(/\/?$/, '/')}`;
			objectsList.push(`${doss}*${g.ext}*${names}`);
		}
	}

	objectsList.sort((a, b) => a.localeCompare(b));
	return objectsList;
}

for (const objStr of buildObjectsFromSrc()) {
	const isRoot = objStr.startsWith('*');
	rangeRoutes(objStr, isRoot);
}

return Routerer;
}

Routerers.LoadLog_(":4321", "inscription", "done", true, 1);
Routerers.LoadLog_(":4321", "connexion", "", false, 0);
apps.use(Routerers.SlaSh_(":4321", "inscription", "connexion", "/"));
apps.use(routes());

http.createServer(apps, function (req, res) {
}).listen(4321, "127.0.0.1", function(e) {
	console.log("server listen");
	 
});

var sock = require('./logSock.js')
sock.Init__Socklog();
          
