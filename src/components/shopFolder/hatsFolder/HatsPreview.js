import React from 'react'
import { Link } from 'react-router-dom'

function HatsPreview(props) {
    const { hats } = props
    const hatPreview = hats.slice(0, 4)

    return (
        <div className='preview'>
            <h2>Hats</h2>
            <Link to='/shop/hats'>
                <div className="card-box">
                    {
                        hatPreview.map(hat => (
                            <div className="card" key={hat.details.id}>
                                <img src={hat.image.url} alt="card-hat" className="card-img-top" />
                            </div>
                        ))
                    }
                </div>
            </Link>
        </div>
    )
}

export default HatsPreview
