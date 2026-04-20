var crypto = require('crypto');
var logina = require('./auth/firstLog.js');
var port = ":4321";
var ipLOGey = logina.ipcalcul2();
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

module.exports = {



authCty : function(Namae, pourcentage) {
	
	if (logina.firstLogs(Namae) == "Valid") {
		logina.enregistUser(logina.firstLogs(Namae), Namae, pourcentage, "null");
		
	return "Quedal";
	} else if (logina.firstLogs(Namae) == "Exist") {
	if (logina.authAccept(logina.firstLogs(Namae),Namae,pourcentage) == "authAccept") {
		
		var html = Namae;
	} else {
		var html = "<!DOCTYPE html><html lang='fr'><head><meta charset='UTF-8'></head><body>Nom utilisateur déjà prit.<a id='pow' href='http://"+ipLOGey+ port + '/' + "'>Annulation</a><script>document.getElementById('pow').click();</script></body></html>";
	}
	return html;
	} else {
		var html = logina.authAccept(logina.firstLogs(Namae),Namae,pourcentage);
	return html;	
	}
	


},
coCty : function(Namae, pourcentage, valueO) {
	
	if (logina.firstLogs(Namae) == "Valid") {
		
	return "<!DOCTYPE html><html lang='fr'><head><meta charset='UTF-8'></head><body><a id='pow' href='http://"+ipLOGey+ port + '/' + "'>Annulation de la connexion</a><script>document.getElementById('pow').click();</script></body></html>";
	} else if (logina.firstLogs(Namae) == "Exist") {
	if (logina.authAccept(logina.firstLogs(Namae),Namae,pourcentage) == "authAccept") {
		
		var html = logina.confirmPostUser(Namae , valueO);
	} else {
		var html = "<!DOCTYPE html><html lang='fr'><head><meta charset='UTF-8'></head><body>Mauvais Mdp.<a id='pow' href='http://"+ipLOGey+ port + '/' + "'>Annulation de la connexion</a><script>document.getElementById('pow').click();</script></body></html>";
	}
	return html;
	} else {
		var html = logina.authAccept(logina.firstLogs(Namae),Namae,pourcentage);
	return html;	
	}
	

}




}