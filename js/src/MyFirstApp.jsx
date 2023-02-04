import ProtoTypes from 'prop-types';
import './style.css'

export const MyFirstApp = ({title, subTitle}) => {

	return (
		<>
			<h1>{ title }</h1>
			<p>{subTitle}</p>
		</>
	)
}

MyFirstApp.protoTypes = {

	title: ProtoTypes.string.isRequired

}
