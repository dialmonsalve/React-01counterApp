import { useState } from "react";

interface props{
	value:number;
	subtitle?:string | number;
	title?:string;
}

export const TaskApp = ({title, subtitle, value}:props) => {

	const [num, setNum] = useState(value)

	const handledAdd = ()=> setNum(num+1)
	
	const handledSubstract = ()=>	setNum(num-1)

	const handledReset = ()=> setNum(value)

	return (
		<>
			<h1>{title}</h1>
			<h2>{subtitle}</h2>
			<p>{num}</p>
			<button onClick={handledAdd} >
				+1
			</button>
			<button onClick={handledSubstract} >
				-1
			</button>
			<button onClick={handledReset} >
				Reset
			</button>
		</>
	)
}

