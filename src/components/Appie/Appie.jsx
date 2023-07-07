import React from 'react'
import AppiePhoto from '../../i/Appie-prev.jpg'
import Project from '../Project/Project'
function Appie(props) {
	return (
		<>
			<Project
				title={'Appie'}
				photo={AppiePhoto}
				technologies={[
					'HTML5',
					'CSS3',
					'JavaScript ES6+',
					'React 18',
					'Slider Swiper',
				]}
				description={
					'Appie – React app landing page template. It is a responsive template build with the futuristic design and modern technologies. We`ve got a burger menu with an accordion in it on the mobile or tablet versions. Also we have slider swiper to show more inofrmation.'
				}
				code={'https://github.com/ShirayDan/appie'}
				deployment={'https://shiraydan.github.io/appie/'}
			/>
		</>
	)
}
export default Appie
