import React from 'react'
import './Portfolio.css'
import Slider from './Slider/Slider'
function Portfolio() {
	return (
		<>
			<div className='portfolio'>
				<h2 className='portfolio__title'>
					My <span className='changed'>Portfolio</span>
				</h2>
				<div className='portfolio__slider'>
					<Slider />
				</div>
			</div>
		</>
	)
}
export default Portfolio
