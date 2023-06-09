import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Parts/Button/Button'
import './Home.css'
function Home() {
	return (
		<>
			<div className='home'>
				<div className='home__container'>
					<h1 className='home__title'>
						Danylo <span className='changed'>Shyrai</span>
					</h1>
					<h2 className='home__subtitle'>Creative Front-End Developer</h2>
					<Link to='/contact'>
						<Button text={'Get in Touch'} />
					</Link>
				</div>
			</div>
		</>
	)
}
export default Home
