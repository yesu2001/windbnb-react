import {useState,useEffect} from 'react';
import Property from './Property';
import stays from './stays.json';

const Properties = ({data,location}) => {
	console.log(data.length)
	return (
		<div className="properties">
			{
				!location ? (
						stays.map((stay,index) => (
							<Property key={index} stay={stay} /> 
						))
					):(
						data.length > 0 && (
							data.map((stay,index) => (
								<Property key={index} stay={stay} /> 
							))
						)
					) 
			}
		</div>
	)
}

export default Properties;