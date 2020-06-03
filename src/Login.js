import React from 'react'

export const Login = () => (
        <div className="login-form">
            <form action="/login" method="post">
        <h2 className="text-center">Log in</h2>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Username" required="required"/>
        </div>
        <div className="form-group">
            <input type="password" className="form-control" placeholder="Password" required="required"/>
        </div>
        <div className="form-group">
            <button type="submit" className="btn btn-dark btn-block">Log in</button>
        </div>
        <div className="clearfix">
            <label className="pull-left checkbox-inline"><input type="checkbox"/> Remember me</label>
            <a href="#" className="pull-right">Forgot Password?</a>
        </div>
    </form>
    <p className="text-center"><a href="#">Create an Account</a></p>
</div>
)