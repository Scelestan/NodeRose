const http = require('http');
const crypto = require('crypto');

const express = require('express');
const Cty = require('./Log.js');
const fL = require('./auth/firstLog.js');
//const logSock = require('./logSock.js');

const querystring = require("querystring");

var Routerer = express.Router();

var ipLOGey2 = fL.ipcalcul();
var ipLOGey = fL.ipcalcul2();

//logSock.Init__Socklog();

module.exports = {


SlaSh_ : function(port, inscription, connexion, Accueil) {

Routerer.get(Accueil, function (req, res, next) {
res.set({ 'content-type': 'text/html; charset=utf-8' });
res.write(fL.PageLogin().replace("LINKinscription", "http://"+ipLOGey + port + "/" + inscription).replace("LINKconnexion", "http://"+ipLOGey + port + "/" + connexion));
res.end();
});
return Routerer;
},


LoadLog_ : function(port, inscription, Accueil, authent, valueOF) {

if (!valueOF) {
valueOF = 0;
console.log("authentificator creation done");
}




Routerer.get('/' + inscription, function (req, res) {
res.set({ 'content-type': 'text/javascript; charset=utf-8' });
res.write(fL.PageInscription().replace("LINKinscription", 'http://'+ipLOGey + port + '/' + Accueil));
res.end();

}).post('/' + Accueil, function (req, res, next) { if (req.get("referrer") == ("http://"+ipLOGey+ port + "/")) {
	next();
	} else {
res.write("<!DOCTYPE html><html lang='fr'><head><meta charset='UTF-8'></head><body><a id='pow' href='http://"+ipLOGey+ port + '/' + "'>Annulation de la connexion</a><script>document.getElementById('pow').click();</script></body></html>");
	res.end();
	} }, function (req, res, next) {






var PoignetDePorte = false;

var pourcentage;
var Namae;

req.setEncoding("utf8");
        req.addListener("data", function(postDataChunk) {
            
          
if (PoignetDePorte == false) {

Namae = querystring.parse(postDataChunk).name;
pourcentage = sha1(querystring.parse(postDataChunk).password);
var tesssk = querystring.parse(postDataChunk).pages;
writeResis(tesssk, valueOF);

PoignetDePorte = true;

}





function writeResis(Pge, lili) {

if (PoignetDePorte == false) {
res.set({ 'content-type': 'text/html; charset=utf-8' });
var One;
if (authent) {
One = Cty.authCty(Namae, pourcentage);
} else {
One = Cty.coCty(Namae, pourcentage, lili);
}
quedal();
function quedal() {
if (One != "Quedal") {
	
	res.write(One);

res.end();
} else if (One == "Quedal") {
	
	One = Cty.authCty(Namae, pourcentage);
	
	
	
	
	
	

res.write("<!DOCTYPE html><html lang='fr'><head><meta charset='UTF-8'></head><body><a href='http://"+ipLOGey+ port + "/'>OK</a><a id='pow' href='http://"+ipLOGey+ port + '/' + "'>OK</a><script>document.getElementById('pow').click();</script></body></html>");
res.end();



}

}

}
}




		});









});


},


}

function sha1( data ) {
     var generator = crypto.createHash('sha1');
     generator.update( data )  ;
     return generator.digest('hex') ;
};
function sha256( data ) {
     var generator = crypto.createHash('sha256');
     generator.update( data )  ;
     return generator.digest('hex') ;
};







          