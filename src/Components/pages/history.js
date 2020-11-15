import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: #A2A549;
    width: 100%;
    min-height: 100vh; 
    padding-bottom: 300px;
    padding-top: 200px;
    font-family: Mali;
    text-align: center; 
`

export default class history extends Component {
    render() {
        return (
            <div>
                <Container className="container-fluid">
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-4">
                        </div>
                        <div className="col-4"></div>
                    </div>
                </Container>
            </div>
        )
    }
}
