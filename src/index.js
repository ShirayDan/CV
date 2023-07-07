import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './index.css'

// замість creative придумати інші прикметники та замінити
// реалізувати зміну кольору в бугер меню та зробити іншу кноку для пк під це
// зробити сторінку з формою
// поправити скролбар видно біле по краям
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

function change(e) {
	const els = document.querySelectorAll('.changed')
	const color = e.target.style.backgroundColor
	els.forEach((el) => {
		el.style.color = color
	})
}
export default change
