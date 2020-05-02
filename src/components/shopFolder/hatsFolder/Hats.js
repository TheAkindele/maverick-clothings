import React, { Component } from 'react'
import { FaCartPlus } from 'react-icons/fa'
import axios from 'axios'

class Hats extends Component {

    state = {
        hats: []
    }

    componentDidMount() {
        axios('../../maverickClothings.json')
            //.then(res => res.json())
            .then(response => {
                console.log('hats= ', response.data.hats)
                this.setState({
                    hats: response.data.hats
                })
            })
            .catch(err => console.log('error found ', err))
    }

    render() {
        const hats = this.state.hats
        return (
            < div className='product-container'>
                <h2>Hats</h2>
                <div className="card-container">
                    {
                        hats && hats.map(hat => (
                            <div className="card cards" key={hat.details.id}>
                                <img src={hat.image.url} alt="card-hat" className="card-img-top" />
                                <div className="card-body">
                                    <h4 className="card-title">{hat.details.title}</h4>
                                    <div className="card-subtitle">
                                        <h5 className="card-text">#{hat.details.price}</h5>
                                        <h4 className='card-link'><FaCartPlus /></h4>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div >
        )
    }

}

export default Hats
