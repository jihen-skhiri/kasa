import '../../styles/Tags.css'

 function Tag(props) {
	return (
		<div className="tagContainer">
			<span className="tagButton">{props.tag}</span>
		</div>
	);
}
export default Tag;