let connection = require ('./config_bdd')


class Todo {

	constructor(row){
		this.row = row
	}



	static all (cb){
	 connection.query (`SELECT todos.id, todos.todo, todos.is_check, preferences.preference, types.type 
	 					FROM todos JOIN preferences, types WHERE todos.id_preference = preferences.id AND todos.id_type = types.id`,(err,rows) => {
 	if (err) throw err
 		cb(rows.map((row) => new Todo(row)))//resultat du callback
 }) 
}


}
module.exports = Todo