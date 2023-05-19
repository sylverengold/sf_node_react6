//cmd: npm install -g npm
//cmd: npm init
//cmd: npm install -g serve
//recharge de page automatique
//cmd: npm run start  
//cmd: npm install -g live-server
//live-server --port=8009
//
//


let http = require('http') // import objet http
let fs = require('fs')
let Message = require("./todos")
//require("./App0")
let server = http.createServer() //instance

//console.log(server.location)


const options =  {
'Access-Control-Allow-Origin': '*',
'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, PUT, PATCH, DELETE',
'Access-Control-Allow-Headers': 'Content-Type, Authorization',
'content-type': 'text/html; charset=utf-8',
'Access-Control-Allow-Credentials': 'true',


  }

//'Content-Type': 'multipart/form-data; boundary=something'

server.on('request',(request,response) => {



	fs.readFile('index.html',(err, data) => {
		  //if (err) throw err
		if (err){
			response.writeHead(404)
			response.end ('Ce fichier n\'existe pas')
		}
		else{		  	
			response.writeHead(200, options )

			response.write (data)	
			response.end ()
		}

//	response.end ('Salut comment ça va?')
//console.log('Il y a une requete');
	})
})

server.listen(8009) //port du serveur



//			response.writeHead(200, {'Access-Control-Allow-Origin': '*'})
	//		response.writeHead(200, {'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, PUT, PATCH, DELETE'})
	//		response.writeHead(200, {'Access-Control-Allow-Headers': 'Content-Type, Authorization'})