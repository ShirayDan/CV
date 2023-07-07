import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Appie from './Appie/Appie'
import Contacts from './Contacts/Contacts'
import Home from './Home/Home'
import Layout from './Layout/Layout'
import Modal from './Modal/Modal'
import Portfolio from './Portfolio/Portfolio'
import Speedia from './Speedia/Speedia'

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index element={<Home />} />
						<Route path='about' element={<Modal />} />
						<Route path='portfolio' element={<Portfolio />} />
						<Route path='contact' element={<Contacts />} />
						<Route path='Speedia' element={<Speedia />} />
						<Route path='Appie' element={<Appie />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
