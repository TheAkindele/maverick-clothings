import React, { Component } from 'react'

import { Image, Transformation, CloudinaryContext } from 'cloudinary-react';

class Homepreview extends Component {
    render() {
        return (
            <div className='home-preview'>
                <div className="col">
                    <div className="inner">
                        <h3>hat</h3>
                        <h6>shop now</h6>
                    </div>
                </div>
                <div className="col">
                    <div className="inner">
                        <h3>hat</h3>
                        <h6>shop now</h6>
                    </div>
                </div>
                <div className="col">
                    <div className="inner">
                        <h3>hat</h3>
                        <h6>shop now</h6>
                    </div>
                </div>
                <div className="col">
                    <div className="inner">
                        <h3>hat</h3>
                        <h6>shop now</h6>
                    </div>
                </div>
                <div className="col">
                    <div className="inner">
                        <h3>hat</h3>
                        <h6>shop now</h6>
                    </div>
                </div>
            </div>
        )
    }
}

export default Homepreview



/*
<Row className='row'>
                    <Col xs='12' md="4" className='col my-1' ><div className="cols" id="col-1"></div></Col>
                    <Col xs='12' md="4" className='col my-1' id="col-2"></Col>
                    <Col xs='12' md="4" className='col my-1' id="col-3"></Col>
                </Row>
                <Row>
                    <Col md={{ span: 3, }} className='span mx-5'>{`md={{ span: 3, offset: 3 }}`}</Col>
                    <Col md={{ span: 3, }} className='span'>{`md={{ span: 3, offset: 3 }}`}</Col>
                </Row>

<div className="columns">
                        <div className='col' id="col-1"></div>
                        <div className='col' id="col-2"></div>
                        <div className='col' id="col-3"></div>
                    </div>

<Row className='border border-danger'>
                    <Col xs='12' md="4" className='col column-1'></Col>
                    <Col xs='12' md="4" className='col column-2'></Col>
                    <Col xs='12' md="4" className='col column-3'></Col>

                </Row>
                <Row>
                    <Col>1 of 3</Col>
                    <Col md="auto">Variable width content</Col>
                    <Col xs lg="2">3 of 3</Col>
                </Row>
*/