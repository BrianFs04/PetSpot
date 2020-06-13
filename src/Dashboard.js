import React from 'react';
import auth from './Auth';

export const Dashboard = (props) => {
        return (<div>
                <h1>Welcome to the Dashboard</h1>
                <button onClick={() => {
                        auth.logout(() => {
                                props.history.push('/');
                        })
                }}>Logout</button>
        </div>)
};