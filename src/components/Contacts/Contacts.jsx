import React from 'react'
import './Contacts.css'

function Contacts() {
	return (
		<>
			<div className='contacts'>
				<form action='' autoComplete='off' className='contacts__form'>
					<h3 className='contacts__title'>
						Send me a <span className='changed'>message</span>
					</h3>
					<label htmlFor='email' className='form__label'>
						<input
							className='contacts__input'
							type='text'
							id='email'
							name='email'
							required
							placeholder='dan.shirayy@gmail.com'
						/>
					</label>
					<label htmlFor='email' className='form__label'>
						<textarea
							className='contacts__textarea'
							type='text'
							id='email'
							name='email'
							required
							placeholder='dan.shirayy@gmail.com'
						/>
					</label>
					<input type='email' />
				</form>
			</div>
		</>
	)
}
export default Contacts
