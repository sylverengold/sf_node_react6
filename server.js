//cmd: npm install -g npm
//cmd: npm init
//cmd: npm install -g serve
//recharge de page automatique
//cmd: npm run start  
//cmd: npm install -g live-server
//live-server --port=8009
//
//


//cmd : npm i -S express 
let express = require ('express')// import et affectation à la variable app de la classe express
let app = express()



//cmd : npm i -S body-parser // formate des données POST //middle ware 
let bodyParser = require ('body-parser') 

app.use (express.static('public'))//


//app.use(bodyParser.urlencoded({extended: false}))//parametrage body-parser pour URL
//app.use(bodyParser.json())//parametrage body-parser pour json 

//app.get('/',(request,response)=>{
	//let Todo = require("./todos")
	//response.render('index_test')
	//Todo.all(function(todos){
		//console.log(todos)
			//response.render('index', {todos:todos})//on injecte une variable vers le template

	//})

//})
app.get('/',(request,response)=>{
	response.set('Content-Type', 'text/html')
	//response.send(Buffer.from('<p>some html</p>'))
	response.render('index', function (err, html) {
		response.send(html)
})
})


app.listen(8080)