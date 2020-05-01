import React from 'react'
import { Link } from 'react-router-dom'

function FemalesPreview(props) {
    const { females } = props
    const femalePreview = females.slice(2, 6)

    return (
        <div className='preview'>
            <h2>Female</h2>
            <Link to='/shop/female'>
                <div className="card-box">
                    {
                        femalePreview.map(female => (
                            <div className="card" key={female.details.id}>
                                <img src={female.image.url} alt="card" className="card-img-top" />
                            </div>
                        ))
                    }
                </div>
            </Link>
        </div>
    )
}

export default FemalesPreview