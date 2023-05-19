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



function Tabs0 ({tabsTodoList}) {
	console.log(tabsTodoList)

	const [isCheckOnly, setCheckOnly] = React.useState(false)	//on trie le tableau par type
	const [NoCheckOnly, setNoCheckOnly] = React.useState(false)	//on trie le tableau par type
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
		if (isCheckOnly && !todo.is_check){//si OkOnly == true  et todo.is_check == false
			return//on saute une ligne
		}
		if (NoCheckOnly && todo.is_check){//si NoOkOnly == true  et todo.is_check == true 
			return//on saute une ligne
		}
		if (todo.type != lastType){
			lastType = todo.type
			rows.push(<TodoTypeRow key= {lastType} category = {todo.type}/>)
		}
		rows.push(<TodoRow key= {todo.id} product = {todo}/>)
	}) 
	
	const tabs = React.Children.toArray(children).map(tab => tab.props.title)//on peut lister entre autres les elements de l'enfant 
	const childrenArray = React.Children.toArray(children)
	const [current, setCurrent]  = React.useState(childrenArray[0].key) // on utilise useState pour stocker un element et son état
	const newChildren =  childrenArray.map(child => {//on ne peut pas modifier les children à la volée - on créé un nouveau tableau newChildren
		return React.cloneElement(child, {selected:child.key === current}) // selected = true si la condition child.key === current se vérifie
})
	return <div>
	<nav>
		{childrenArray.map(child => <button onClick={() => setCurrent(child.key)} key={child.key}>{child.props.title}</button>)}
	</nav>
	<section>
	{newChildren}
	</section>
	</div>;
}

function Tab ({children, selected}) {
	return <div hidden={!selected}>{children}</div>;
}

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