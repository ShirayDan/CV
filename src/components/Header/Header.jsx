import React from 'react'
import Logo from '../../i/logo-3.png'
import Burger from './Burger/Burger'
import './Header.css'
import NavBar from './NavBar/NavBar'
function burgerClick(e) {
	const burgerMenu = document.querySelector('.burger')

	e.target.classList.toggle('active')
	burgerMenu.classList.toggle('active')
	document.body.classList.toggle('lock')
}
function Header() {
	return (
		<>
			<header className='header'>
				<div className='header__container'>
					<div className='header__logo-container'>
						<img src={Logo} alt='' className='header__logo' />
					</div>
					<NavBar />
					<div className='header__burger' onClick={burgerClick}>
						<span className='header__span'></span>
					</div>
					<Burger />
				</div>
			</header>
		</>
	)
}
export default Header
