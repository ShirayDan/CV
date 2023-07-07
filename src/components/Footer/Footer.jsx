import React from 'react'
import './Footer.css'

function Footer() {
	return (
		<>
			<footer className='footer'>
				<div className='footer__container'>
					<p className='footer__text'>
						Created by <span className='changed'>@LynadPro</span> 2023
					</p>
					<div className='footer__social'>
						<ul className='footer__list'>
							{icons.map((item) => {
								return (
									<li className='footer__item'>
										<span className={'changed icon ' + item}></span>
									</li>
								)
							})}
						</ul>
					</div>
				</div>
			</footer>
		</>
	)
}
const icons = [
	'icon-instagram',
	'icon-whatsapp',
	'icon-telegram',
	'icon-github',
]
export default Footer
