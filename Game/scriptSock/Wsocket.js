var resolvedPromise = typeof Promise == 'undefined' ? null : Promise.resolve();
//var nextTick = resolvedPromise ? function(fn) { resolvedPromise.then(fn); } : function(fn) { setTimeout(fn); };
var connectionEnter = 0;
var beforeConnect = 0;
var idpersonn = 0;
var socket;
var loadPrems3 = true;
var equipes = [["1"],["2"],["3"],["4"]];
var ecu = -1;
/*
function sleep (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
*/



socketL();


 

function socketL() {  

 if ("WebSocket" in window) {
               console.log("WebSocket is supported by your Browser!");
socket = new WebSocket("ws://localhost:2424");
 }
//192.168.1.111 localhost

var IDENTT = 0;
console.log("web");

socket.onerror=function (e) {
console.log(e.toString());
};
socket.onclose=function (e) {

};

socket.onopen=function (event) {
console.log("web socket");

    
document.getElementById('selection').addEventListener('click', function() {


var blabla = document.querySelector('h1').innerHTML + "%0/"+ IDENTT + "/" + document.querySelector('#xv').value + "/Adjyru/0/0";
console.log(blabla);
if (socket.bufferedAmount == 0)
      socket.send(blabla);


 });
if (socket.bufferedAmount == 0) {
      socket.send(document.querySelector('h1').innerHTML + "%0/-1"+
"/Connect/1/0/0");
	 }

};


var UNO;
function unefois() {
	clearInterval(UNO);
	 if (initts == "0") {initts = "1";
	 
	 Lliesorti = setInterval(ploukiize, 850);
	 }

 }



document.querySelector('#pourcent').innerHTML = "super chat sockets :";
//document.querySelector('#pourcentaa').style.backgroundColor = "white";

var positionpourcent = 0;
var premier5 = 5;
var loadPrems = true;
var loadPrems2 = false;

socket.onmessage=function (event) {
    

var parser, xmlDoc;

parser = new DOMParser();
xmlDoc = parser.parseFromString(event.data.toString(),"text/xml");
//event = sleep(40);
//ici = rien
if (!xmlDoc.getElementsByTagName("Yvan")[0]) {
	
} else 
if (xmlDoc.getElementsByTagName("Yvan")[0].childNodes[0].nodeValue == 'refresh' || xmlDoc.getElementsByTagName("Yvan")[0].childNodes[0].nodeValue == 'Adjyru') {
/*if (xmlDoc.getElementsByTagName("Yvan")[i].childNodes[0].nodeValue == 'disconnect') {
//IDENTT -= 1;
}*/
//console.log(xmlDoc.getElementsByTagName("Xavier")[i].childNodes[0].nodeValue);
document.querySelector('#pourcentaa').style.top = positionpourcent.toString() + "px";
premier5 -= 1;
if (premier5 < 0) {
positionpourcent -= 17;
}
document.querySelector('#pourcent').innerHTML += "<br/>__" + xmlDoc.getElementsByTagName("nom")[0].childNodes[0].nodeValue + ", dis : " + xmlDoc.getElementsByTagName("Xavier")[0].childNodes[0].nodeValue;
}
}






}



