import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Homepreview extends Component {
    state = {
        covers: []
    }

    componentDidMount() {
        axios('./maverickClothings.json')
            .then(res => {
                //console.log('covers= ', res.data.covers)
                this.setState({
                    covers: res.data.covers
                })
            })
    }

    render() {
        //console.log('state= ', this.state.covers)
        const covers = this.state.covers
        return (
            <div className='home-preview'>
                {
                    covers && covers.map(({ title, imageUrl, id }) => (
                        <div className="col" key={id} style={{ backgroundImage: `url(${imageUrl})` }}>
                            <Link to={`/shop/:${title}`}><div className="inner">
                                <h3>{title}</h3>
                                <h6>shop now</h6>
                            </div></Link>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Homepreview
