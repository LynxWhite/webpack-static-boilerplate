import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import { Router, Route, BrowserRouter } from 'react-router-dom';


ReactDom.render(
    <BrowserRouter>
        <Route path='/' component={App} />
    </BrowserRouter>, 
    document.getElementById('root')
)