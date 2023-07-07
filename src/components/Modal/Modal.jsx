import React from 'react'
import CV from '../../i/CV.pdf'
import Softserve from '../../i/Certificate.pdf'
import Beetroot from '../../i/download.pdf'
import Img from '../../i/i.jpg'
import Button from '../Parts/Button/Button'
import List from '../Parts/List/List'
import './Modal.css'
function Modal() {
	return (
		<>
			<div className='modal'>
				<div className='modal__right'>
					<div className='modal__top'>
						<div className='modal__avatar'>
							<img src={Img} alt='' className='modal__img' />
						</div>
						<h2 className='modal__title'>
							Danylo <span className='changed'>Shyrai</span>
						</h2>
						<h3 className='modal__subtitle'>
							Creative <span>Front-End Developer</span>
						</h3>
					</div>
					<div className='modal__list-container'>
						<ul className='modal__list'>
							{list.map((item, i) => {
								return (
									<li className='modal__list-item'>
										<span
											className={'changed icon icon_left ' + item.iconCl}
										></span>
										<p className='modal__text'>
											{i > 1 ? <span>{item.text}</span> : item.text}
										</p>
									</li>
								)
							})}
						</ul>
					</div>
					<Button text={'Download CV'} link={CV} download={''} />
				</div>
				<div className='modal__left'>
					<div className='modal__about'>
						<div className='modal__about-title'>
							<h3 className='modal__title modal__title_small'>
								About<span className='changed'> Me</span>
							</h3>
							<p className='modal__text modal__text_large '>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Incidunt sit eveniet quod, expedita dicta voluptate? Ad sit
								accusantium, commodi beatae rerum laudantium velit illo minus.
								Placeat rem veniam molestias adipisci.
							</p>
						</div>
						<div className='modal__skills'>
							<h3 className='modal__title modal__title_small'>
								Programing<span className='changed'> Skills</span>
							</h3>
							<List info={skills} />
							<img
								className='modal__codewars'
								src='https://www.codewars.com/users/LynadPro/badges/micro'
							/>
						</div>

						<div className='modal__education'>
							<h3 className='modal__title modal__title_small'>
								Education <span className='changed'> Timeline</span>
							</h3>
							<ul className='modal__list modal__list_timeline'>
								{selfEducation.map((item, i) => {
									return (
										<li className='modal__education-item'>
											<div className='modal__education-inner'>
												<div className='modal__education-top'>
													<span className='modal__span'>{item.duraion}</span>
												</div>
												<div className='modal__education-bottom'>
													<p className='modal__text modal__text_white'>
														{item.company}
													</p>
													<p className='modal__text '>
														{item.name !== '' ? item.name : ''}
													</p>

													{item.name !== '' ? (
														<a
															className='modal__text '
															href={item.link}
															download
														>
															<span className='changed'>Certificate</span>
														</a>
													) : (
														''
													)}
												</div>
											</div>
										</li>
									)
								})}
							</ul>
						</div>
						<div className='modal__lang'>
							<h3 className='modal__title modal__title_small'>Languages</h3>
							<ul className='modal__list'>
								<List info={language} />
							</ul>
						</div>
						<div className='modal__university'>
							<h3 className='modal__title modal__title_small'>University</h3>
							<p className='modal__text_white modal__text_first'>
								National University "Yuri Kondratyuk Poltava Polytechnic"
							</p>
							<p className='modal__text'>Bachelor’s degree</p>
							<p className='modal__text'>
								<span className='changed'>Computer Science</span> 2021-2025 (2
								course)
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

const list = [
	{
		iconCl: 'icon-user',
		text: 'Danylo Shyrai',
	},
	{
		iconCl: 'icon-calendar',
		text: '13.02.2004',
	},
	{
		iconCl: 'icon-location2',
		text: 'Ukraine, Poltava',
	},
	{
		iconCl: 'icon-phone',
		text: '+380992477826',
	},
	{
		iconCl: 'icon-envelop',
		text: 'dan.shirayy@gmail.com',
	},
]
const skills = [
	{
		name: 'HTML5',
		description: '2 years experience',
	},
	{
		name: 'CSS3',
		description: '2 years experience',
	},
	{
		name: 'SCSS',
		description: '1.5 years experience',
	},
	{
		name: 'JavaScript',
		description: '1.5 years experience',
	},
	{
		name: 'jQuery',
		description: '1 year experience',
	},
	{
		name: 'React',
		description: '1 year experience',
	},
	{
		name: 'Git',
		description: '1.5 years experience',
	},
	{
		name: 'Codewars',
		description: 'Top 3.361% (#17,370)',
	},
]
const language = [
	{
		name: 'English',
		description: 'B1+',
	},
	{
		name: 'Ukrainian',
		description: 'Native',
	},
]
const selfEducation = [
	{
		company: 'Beetroot Academy',
		name: 'Course "Front-End Developer"',
		duraion: 'October 2021 - February 2022',
		link: Beetroot,
	},
	{
		company: 'Self education',
		name: '',
		duraion: 'March 2022 - October 2022',
	},
	{
		company: 'Softserve',
		name: 'Crash course "Js Fundamental"',
		duraion: 'October 2022 - December 2022',
		link: Softserve,
	},
	{
		company: 'Self education',
		name: '',
		duraion: 'December 2022 - February 2023',
	},
	{
		company: 'Softserve',
		name: 'Internship',
		duraion: 'February 2023 - May 2023',
		link: '',
	},
]
export default Modal
