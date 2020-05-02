import React from 'react'
import { Switch, Route } from 'react-router-dom'
//import Container from 'react-bootstrap/Container'
import NavBar from './Navfolder/Navbar'
import Homepreview from './Homepreview'
import Shop from './shopFolder/Shop'
import Hats from './shopFolder/hatsFolder/Hats'
//import Sneakers from './shopFolder/hatsFolder/Sneakers'

const Homepage = () => {
    return (
        <div className="homepage">
            <NavBar />
            <Switch>
                <Route exact path='/' component={Homepreview} />
                <Route exact path='/shop' component={Shop} />
                <Route path='/shop/:product' component={Hats} />

            </Switch>
        </div>
    );
}
//<Route path='/shop/:productId' component={Sneakers} />
export default Homepage;