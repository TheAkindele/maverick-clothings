import React from 'react'
import { Link } from 'react-router-dom'

function SneakersPreview(props) {
    const { sneakers } = props
    //console.log('sneaker= ', sneakers)
    const sneakerPreview = sneakers.slice(0, 4)

    return (
        <div className='preview'>
            <h2>Sneakers</h2>
            <Link to='/shop/sneakers'>
                <div className="card-box">
                    {
                        sneakerPreview.map(sneaker => (
                            <div className="card" key={sneaker.details.id}>
                                <img src={sneaker.image.url} alt="card" className="card-img-top" />
                            </div>
                        ))
                    }
                </div>
            </Link>
        </div>
    )
}

export default SneakersPreview
