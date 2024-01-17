import React from 'react'

export const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <h1 className="text-3xl font-bold underline">
            Hello world!
          </h1>
            <form>
                <input type="text" placeholder='Email' /><br />
                <input type="password" placeholder='Password' /><br />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}
