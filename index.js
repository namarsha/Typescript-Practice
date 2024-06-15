import {routeHello, routeAPINames} from "./routes.js"
import express from "express";


// This applicaiton uses the express framework; the require function is built into node
// and permits the application to import the express framework.

// This is actually an old way to do this. Modern ES.Next javascript uses import
// and export statements

const server = express();
// create an instance of the express framework called "server"

const port = 3000;

server.get('/hello', function (req, res) {
	//when you hit the /hello endpoint on the port 3000 local host, run a function that takes 
	// a request and outputs a result object. The result obect in turn 
	const response = routeHello(req, res);
	res.send(response);
});

server.get("/api/names", async function (req, res) {
	let response;
	try {
		response = await routeAPINames(req, res);
	} catch (err) {
		console.log(err);
	}
	res.send(response);

});


server.listen(port, function () {
	console.log('Listening on ' + port);
});


