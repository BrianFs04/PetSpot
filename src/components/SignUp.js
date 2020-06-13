import React from 'react'

export const Signup = () => (
    <div className="login-form">
        <form action="http://localhost:3000/create" method="POST">
            <h2 className="text-center">Sign Up</h2>
            <div className="form-group">
                <input type="text" name="username" className="form-control" placeholder="Username" required="required" />
            </div>
            <div className="form-group">
                <input type="text" name="name" className="form-control" placeholder="Name" required="required" />
            </div>
            <div className="form-group">
                <input type="text" name="lastname" className="form-control" placeholder="Last Name" required="required" />
            </div>
            <div className="form-group">
                <input type="text" name="email" className="form-control" placeholder="Email" required="required" />
            </div>
            <div className="form-group">
                <input type="text" name="phone" className="form-control" placeholder="Phone" required="required" />
            </div>
            <div className="form-group">
                <input type="password" name="password" className="form-control" placeholder="Password" required="required" />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-dark btn-block">Sign up!</button>
            </div>
        </form>
    </div>
)