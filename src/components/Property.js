import './styles.css'

const Property = ({stay}) => {
	return (
		<div className="property">
			<img src={stay.photo} alt=""/>
			<div className="desc">
				<div className="desc-host">
					{stay.superHost === true && <button>SUPER HOST</button>}
					<p>{stay.type}</p>
					</div>
				<span>
					<img src="https://img.icons8.com/ios-glyphs/30/EB5757/star--v1.png"/>
					{stay.rating}
				</span>
			</div>
			<p>{stay.title.slice(0,50)}</p>
		</div>
	)
}

export default Property;