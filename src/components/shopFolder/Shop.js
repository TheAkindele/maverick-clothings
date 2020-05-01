import React, { Component } from 'react'
import HatsPreview from './hatsFolder/HatsPreview'
import SneakersPreview from './sneakerFolder/SneakerPreview'
import FemalesPreview from './femaleFolder/FemalePreview'
import KidsPreview from './kidsFolder/KidsPreview'
import MalesPreview from './maleFolder/MalePreview'

class Shop extends Component {
    state = {
        males: [],
        females: [],
        kids: [],
        hats: [],
        sneakers: []
    }

    componentDidMount() {
        fetch('./maverickClothings.json')
            .then(res => res.json())
            .then(data => {
                console.log('result= ', data)
                this.setState({
                    males: data.male,
                    females: data.female,
                    hats: data.hats,
                    kids: data.kids,
                    sneakers: data.sneaker
                })
            })
            .catch(err => {
                console.log('unable to fetch data ', err)
            })
    }

    render() {
        //console.log('state= ', this.state)
        //console.log('state male= ', this.state.males)
        return (
            <div className='shop'>
                <div className="each">
                    <HatsPreview hats={this.state.hats} />
                    <FemalesPreview females={this.state.females} />
                    <SneakersPreview sneakers={this.state.sneakers} />
                    <KidsPreview kids={this.state.kids} />
                    <MalesPreview males={this.state.males} />
                </div>
            </div>
        )
    }
}

export default Shop

