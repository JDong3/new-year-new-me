import React from 'react'
import {Button, Box, Container} from '@material-ui/core'
import AppHeader from './AppHeader'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Home from './Home'
import Posts from './Posts'

function App() {
    return (
        <Container maxWidth={false} style={{background:'green'}} disableGutters={true}>
            <AppHeader/>
            <Router>
                <ul>
                    <li>
                        <Link to='/'>home</Link>
                    </li>
                    <li>
                        <Link to='/posts'>posts</Link>
                    </li>
                </ul>


                <Switch>
                    <Route exact path='/'><Home/></Route>
                    <Route exact path='/posts'><Posts/></Route>
                </Switch>
            </Router>
        </Container>
    )
}

export default App
