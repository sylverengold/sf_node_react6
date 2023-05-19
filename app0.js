const tabsTodoList = [{'id':12, type : 'Espace', todo: "Passer un week-end sur la Lune", preference : 1, is_check : false},
	{'id':8,type : 'Espace', todo: "Traverser les déserts rouges de Mars", preference : 1, is_check : false},
	{'id':14,type : 'Ocean', todo: "Nager avec le Levianthan", preference : 1, is_check : false},
	{'id':9,type : 'Espace', todo: "Surfer sur les anneaux sde Saturne", preference : 1, is_check : false},
	{'id':2,type : 'Terre', todo: "Danser avec les djinns du Sahara", preference : 1, is_check : false},
	{'id':7,type : 'Terre', todo: "Descendre le mont Erebus à ski", preference : 1, is_check : false},
	{'id':11,type : 'Ocean', todo: "Voyager à travers le triangle des Bermudes", preference : 1, is_check : false},
	{'id':9,type : 'Espace', todo: "Grimper sur les volcans de Io", preference : 1, is_check : false},
	{'id':5,type : 'Ocean', todo: "Explorer la fosse des Mariannes", preference : 1, is_check : false},
	{'id':22,type : 'Terre', todo: "Visiter les couloirs de la pyramide de Keops", preference : 1, is_check : false}]



function TodoTypeRow ({type}){
	return <h3 className = "mb-3">{type}</h3>
}

function TodoList ({todos}){

	const rows = []

	todos.forEach(todo => {
	rows.push(<TodoRow key= {todo.id} todo = {todo}/>)	
	})
	return <ul className = "list-group">{rows}</ul>
}

function TodoRow ({todo}){
	return <li className = "list-group-item"><span>{todo.todo}</span><span> {todo.preference}</span><span>{todo.is_check}</span></li>
}


function Tabs({tabsTodoList}) {

		//on trie par type
	tabsTodoList.sort(function compare(a, b) {
		if (a.type < b.type)
			return -1;
		if (a.type > b.type )
			return 1;
		return 0;
	});

					const rows = []
	let  lastType = null

		tabsTodoList.forEach(todo => {
		if (todo.type != lastType){
			lastType = todo.type
			rows.push(<TodoTypeRow key= {lastType} type = {todo.type}/>)
			rows.push(<TodoList todos = {tabsTodoList.filter(t => t.type == lastType)}/>)
		}
		
	}) 

	return <div className = "container">{rows}</div>
}

function App0(list) {
	return <Tabs tabsTodoList ={tabsTodoList}> 

	</Tabs>
}

ReactDOM.render(<App0 list={tabsTodoList}/>,document.querySelector('#app0'))