import React from 'react'
import { Link } from 'react-router-dom'

function KidsPreview(props) {
    const { kids } = props
    const kidsPreview = kids.slice(2, 6)

    return (
        <div className='preview'>
            <h2>Kids</h2>
            <Link to='/shop/kids'>
                <div className="card-box">
                    {
                        kidsPreview.map(kid => (
                            <div className="card" key={kid.details.id}>
                                <img src={kid.image.url} alt="card" className="card-img-top" />
                            </div>
                        ))
                    }
                </div>
            </Link>
        </div>
    )
}

export default KidsPreview