import React from 'react'
import { Link } from 'react-router-dom'
import { Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import Appie from '../../../i/Appie-prev.jpg'
import Speedia from '../../../i/speedia-prev.jpg'
import './Slider.css'
function Slider() {
	return (
		<Swiper
			modules={[Pagination, Autoplay]}
			spaceBetween={25}
			autoplay={true}
			breakpoints={{
				320: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
			}}
			pagination={{ el: '.swiper-pagination', clickable: true }}
		>
			{projects.map((item) => {
				return (
					<SwiperSlide>
						<Link className='navbar__link' to={item.link}>
							<div className='slider__item'>
								<img src={item.photo} alt='' className='slider__img' />
								<div className='slider__modal'>
									<p className='slider__text'>Click for more info</p>
								</div>
							</div>
						</Link>
					</SwiperSlide>
				)
			})}
			<div className='swiper-pagination'></div>
		</Swiper>
	)
}
let projects = [
	{
		link: '../../Appie',
		photo: Appie,
		technologies: ['HTML5', 'CSS3', 'React-18', 'Slider Swiper'],
		description:
			'Appie – React app landing page template. It is a responsive template build with the futuristic design and modern technologies. We`ve got a burger menu with an accordion in it on the mobile or tablet versions. Also we have slider swiper to show more inofrmation',
		code: 'https://github.com/ShirayDan/appie',
		deployment: 'https://shiraydan.github.io/appie/',
	},
	{
		link: '../../Speedia',
		photo: Speedia,
		technologies: ['HTML5', 'CSS3', 'React-18', 'SPA', 'Slider Swiper'],
		description:
			'Speedia is a creative and responsive single page application for modern AutoParts & Accessories website. This app has several pages: home, about, contact, shop grid and blog page ',
		code: 'https://github.com/ShirayDan/Auto-parts-store',
		deployment: 'https://shiraydan.github.io/Auto-parts-store/',
	},
	{
		link: '../../Appie',
		photo: Appie,
		technologies: ['HTML5', 'CSS3', 'React-18', 'Slider Swiper'],
		description:
			'Appie – React app landing page template. It is a responsive template build with the futuristic design and modern technologies. We`ve got a burger menu with an accordion in it on the mobile or tablet versions. Also we have slider swiper to show more inofrmation',
		code: 'https://github.com/ShirayDan/appie',
		deployment: 'https://shiraydan.github.io/appie/',
	},
	{
		link: '../../Speedia',
		photo: Speedia,
		technologies: ['HTML5', 'CSS3', 'React-18', 'SPA', 'Slider Swiper'],
		description:
			'Speedia is a creative and responsive single page application for modern AutoParts & Accessories website. This app has several pages: home, about, contact, shop grid and blog page ',
		code: 'https://github.com/ShirayDan/Auto-parts-store',
		deployment: 'https://shiraydan.github.io/Auto-parts-store/',
	},
	{
		link: '../../Appie',
		photo: Appie,
		technologies: ['HTML5', 'CSS3', 'React-18', 'Slider Swiper'],
		description:
			'Appie – React app landing page template. It is a responsive template build with the futuristic design and modern technologies. We`ve got a burger menu with an accordion in it on the mobile or tablet versions. Also we have slider swiper to show more inofrmation',
		code: 'https://github.com/ShirayDan/appie',
		deployment: 'https://shiraydan.github.io/appie/',
	},
	{
		link: '../../Speedia',
		photo: Speedia,
		technologies: ['HTML5', 'CSS3', 'React-18', 'SPA', 'Slider Swiper'],
		description:
			'Speedia is a creative and responsive single page application for modern AutoParts & Accessories website. This app has several pages: home, about, contact, shop grid and blog page ',
		code: 'https://github.com/ShirayDan/Auto-parts-store',
		deployment: 'https://shiraydan.github.io/Auto-parts-store/',
	},
]

export default Slider
