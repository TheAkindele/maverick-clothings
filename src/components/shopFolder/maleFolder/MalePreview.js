import React from 'react'
import { Link } from 'react-router-dom'

function MalesPreview(props) {
    const { males } = props
    const malePreview = males.slice(4, 8)

    return (
        <div className='preview'>
            <h2>Male</h2>
            <Link to='/shop/male'>
                <div className="card-box">
                    {
                        malePreview.map(male => (
                            <div className="card" key={male.details.id}>
                                <img src={male.image.url} alt="card" className="card-img-top" />
                            </div>
                        ))
                    }
                </div>
            </Link>
        </div>
    )
}

export default MalesPreview