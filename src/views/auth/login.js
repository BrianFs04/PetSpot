import React from 'react'

export const Login = () => (
        <div className="login-form">
                <form action="http://localhost:4000/signin" method="POST">
                        <h2 className="text-center">Log in</h2>
                        <div className="form-group">
                                <input type="text" name="username" className="form-control" placeholder="Username" required="required" />
                        </div>
                        <div className="form-group">
                                <input type="password" name="password" className="form-control" placeholder="Password" required="required" />
                        </div>
                        <div className="form-group">
                                <button type="submit" className="btn btn-dark btn-block">Log in</button>
                        </div>
                </form>
                <p className="text-center"><a href="/signup">Create an Account</a></p>
        </div>
)