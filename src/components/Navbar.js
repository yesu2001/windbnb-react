import {useState} from 'react';
import logo from './logo.png';
import './styles.css';
import stays from './stays.json';
import Properties from './Properties'

const Navbar = () => {
	
	const [open,setOpen] = useState(false);
	const [location,setLocation] = useState('')
	const [guests,setGuests] = useState(0);
	const [data,setData] = useState([]);
	
	const handleSearch = () => {
		if(!location) alert('enter a location');
		console.log(`location: ${location.charAt(0).toUpperCase() + location.slice(1)} , guests: ${guests}`)
		if(location) {
			setData(stays.filter(stay => {
				if((location.charAt(0).toUpperCase() + location.slice(1))===stay.city && guests <= stay.maxGuests) {
					return stay
				}
			}))
		}
		console.log(data)
	}

	return (
		<div className="Navbar">
			<div className="navbar">
				<div className="logo">
					<img src={logo} alt="logo"/>
				</div>
				<div className="search"> 
					<input type="text" className="location" placeholder="Add Location" value={location} onChange={e=>setLocation(e.target.value)}/>
					<input type="number" className="guests" placeholder="Add guests" value={guests===0 ? null :`${guests}`} onChange={e=>setGuests(e.target.value)} />
					<img onClick={handleSearch} src="https://img.icons8.com/ios-glyphs/90/EB5757/search--v1.png"/>
				</div>
			</div>
			{
				location ? (<h2 className="staysCount">{data.length} stays in {location}</h2>):null 
			}
			<Properties location={location} data={data}/>
		</div>

	)
}

export default Navbar;