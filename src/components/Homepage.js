import React from 'react'
import { Switch, Route } from 'react-router-dom'
//import Container from 'react-bootstrap/Container'
import NavBar from './Navfolder/Navbar'
import Homepreview from './Homepreview'
import Shop from './Navfolder/Shop'

const Homepage = () => {
    return (
        <div className="homepage">
            <NavBar />
            <Switch>
                <Route exact path='/' component={Homepreview} />
                <Route path='/shop' component={Shop} />
            </Switch>
        </div>
    );
}

export default Homepage;