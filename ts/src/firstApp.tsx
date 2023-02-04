import {TaskApp} from './TaskApp';
type User = {
	name:string,
	lastname:string,
	age:number
}

const user:User = {
	name: "Diego",
	lastname: "Monsalve",
	age: 40
}

export const App = () =>{

	return(

		<>
			<TaskApp title='Hola Mundo' value={0}/>
			<h3>{JSON.stringify(user, null, 3)}</h3>
			<div></div>
			{
			}
		</>
	)
}