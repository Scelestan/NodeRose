function includes(fileName) {
		if (document.body) {
			var Script = document.createElement("script");
			Script.type = "text/javascript";
			Script.src = fileName;
			var Body = document.body;
			if (Body) {
				Body.appendChild(Script);
			}
		}
	}


includes("/scriptSock/Wsocket.js");

