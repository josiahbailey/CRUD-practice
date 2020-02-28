import React, { useState } from "react";

import { useHistory } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth'

export default function Login(props) {
   const [login, setLogin] = useState({
      username: '',
      password: ''
   })

   const handleChange = e => {
      setLogin({
         ...login,
         [e.target.name]: e.target.value
      })
   }

   const handleSubmit = e => {
      e.preventDefault()
      axiosWithAuth()
         .post('login', login)
         .then(res => {
            // console.log(res)
            window.localStorage.setItem('token', res.data.payload)
         })
         .catch(err => {
            console.log(err)
         })
   }

   return (
      <div>
         <h1>Welcome to the Safari App!</h1>
         <h2>I can't show you more until you log in. Please build out a login.</h2>
         <form className='form-style' onSubmit={handleSubmit}>
            <label htmlFor='username'>
               <input type='text' name='username' label='username' value={login.username} onChange={handleChange} className='input' placeholder='username' />
            </label>
            <label htmlFor='password'>
               <input type='text' name='password' label='password' value={login.password} onChange={handleChange} className='input' placeholder='password' />
            </label>
            <button className='start' type='submit'>Start</button>
         </form>
      </div>
   )
}