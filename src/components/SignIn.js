import React from 'react'
import auth from '../auth'


export const Login = (props) => (
    <div className="login-form">
        <form action="http://localhost:3000/auth" method="POST">
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
        <button onClick={
            () => {
                auth.login(() => {
                    props.history.push("/dashboard");
                })
            }
        }
        >Login</button>
    </div>
)