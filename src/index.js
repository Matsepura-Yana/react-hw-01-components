import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import users from './users.json'

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <App data={users[getRandomInt(10)]} />
)
