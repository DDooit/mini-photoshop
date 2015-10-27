if('function' === typeof importScripts) {
	importScripts("pixastic.js");
	importScripts("pixastic.effects.js");

		//document.write('<scr'+'ipt type="text/javascript" src="pixastic.js" ></scr'+'ipt>');
		//document.write('<scr'+'ipt type="text/javascript" src="pixastic.effects.js" ></scr'+'ipt>');

	var worker = new Pixastic.Worker();

	worker.onmessage = function(message) {
	    postMessage(message.data);
	}

	onmessage = function(message) {
	    worker.postMessage(message.data);
	}
}


