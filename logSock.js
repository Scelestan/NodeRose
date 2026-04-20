const WebSocket = require('ws');
var ipLOGey = require('./auth/firstLog.js').ipcalcul();
const socket = new WebSocket.Server({ port: 2424, host: ipLOGey});
var guy = [];
var exo2 = 0;


process.on('SIGINT', function() {
  socket.close();
  process.exit();
});

module.exports = {



Init__Socklog : function() {


function envSockAll (IDENT) {
socket.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {

var variable = IDENT;
client.send(variable);     

} 
	  });
}


function envSockOne(IDENT, ws) {
	if (!ws) { ws = 0;};
socket.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
if (ws == 0 && client == ws) {
var variable = IDENT;
client.send(variable);
} else
        if (client == ws) {

var variable = IDENT;
client.send(variable);
}

} 
	  });
}

function SocklogParseXML(gugu, Me) {
var exo = Number(guy.length);
var latBG = '<?xml version="1.0" encoding="iso-8859-1"?>' +
'<carnet>';

var o = gugu;
var IDENT2 = o;
	if ("Adjyru" == guy[IDENT2][0][3]) {

latBG += '<personne id="' + 
guy[o][0][1] + 
'">' +
        '<nom>' + 
guy[o][0][0] +  
'</nom>' +
	'<Xavier>' + 
guy[o][0][2] + 
'</Xavier>' +
'<Yvan>' + 
"refresh" + 
'</Yvan>' +
'<Volant>' + 
guy[o][0][4] + 
'</Volant>' +
'<PosX>' + 
guy[o][0][5] + 
'</PosX>' +
'<PosY>' + 
guy[o][0][6] + 
'</PosY>' +
    	'</personne>';
guy[IDENT2][0][3] = "refresh";
//console.log("refresh =");

}
latBG += '</carnet>';

return(latBG);

}

function unefois(tuty, Met) {


if ((guy.length > 0)) {
	
	  envSockAll(SocklogParseXML(tuty, Met));

}

 }

 var boolUno = false;
var UNO; 

	socket.on('error', function ws (error)  {
console.log(error.toString());
});
	
function fonstriasme(i) {

for (var puis = 0; puis <= Number(guy.length)-1; puis++) {
if (puis != Number(i)) {

} else {

GUY[guy[puis][0][0]] = undefined;
guy[puis] = guy[Number(guy.length-1)];

if (guy.length > 1 && puis != Number(guy.length-1)) {
GUY[guy[puis][0][0]] = puis;
}
guy.pop();


console.log("guy.L-1/disconnect by id :" + puis.toString());
}
}

};

function GUY(id, item) {
  GUY[item] = id;
}
var identi = 1;
socket.on('connection', function(ws, wss) {
	
  var domain = wss.headers.origin;
  //console.log(domain);
  
  if (domain == "http://localhost:4321") {

var IDENT = identi;
identi += 1;

ws.on('close', function(client) {
if (guy.length > 0) {
	
for (var totoo = 0; totoo < guy.length; totoo ++) {
if (guy[totoo][0][1] == IDENT) {

guy[totoo][0][3] = "Disconnect";

fonstriasme(totoo);
break;
}
}
}
});


  ws.on('message', message => {
    console.log(`Received message => ${message}`);
         
   function lLsock() {
		
		
if (boolUno == false) {
	
	boolUno = true;
	
 
 var exo3 = 0;
      var perso = message.toString().split("/");    

var Character = perso;
var meta = Number(Character[0].split("%")[1]);
Character[0] = Character[0].split("%")[0];

	 if (!GUY[Character[0].toString()]) {
			exo2 = 0;
			
if (exo2 == 0) {
Character[1] = IDENT;
GUY(guy.length, Character[0].toString());
guy.push([Character]);


}
exo2 = 0;
} else {
exo2 = GUY[Character[0].toString()];
		}
	
	


if (Character[3] == "Disconnect") {
	
if (guy.length > 0) {
	
for (var totoo = 0; totoo < guy.length; totoo ++) {
if (guy[totoo][0][1] == IDENT) {

guy[totoo][0][3] = "Disconnect";

fonstriasme(totoo);
break;
}
}
}

} else if ((Character.length == 6 || Character.length == 7)) {
if (GUY[Character[0].toString()] == 0) {
		Character[1] = guy[GUY[Character[0].toString()]][0][1];
guy[GUY[Character[0].toString()]][meta] = Character;



exo2 = 0;
	} else {


console.log(guy[GUY[Character[0].toString()]]);
Character[1] = guy[GUY[Character[0].toString()]][0][1];
guy[GUY[Character[0].toString()]][meta] = Character;



exo2 = 0;





}


NbreJ = guy.length;


ISS = NbreJ;
var guguss;


guguss = GUY[Character[0].toString()];



if (Character[2] == "Connect") {
	
unefois(guguss, meta);
boolUno = false;
} else {
unefois(guguss, meta);
boolUno = false;
}
}
  } else {
	  
	  console.log("false");
		
	  
  }
  }
  
  
  lLsock();
});

  } else {
	  
	  ws.close();
	  
  }

  });
  

  
  
  
  
  
  
}




};
