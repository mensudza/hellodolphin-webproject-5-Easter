import React, { Component } from 'react'
import navbar1 from './images/navbar/navbar1.png'
import styled, { css, createGlobalStyle } from 'styled-components'

const Nav = styled.div`
    background-color: yellow;
    height :50px;
    text-align:center;
    padding-top:10px;
`
export default class navbar extends Component {
    render() {
        return (
            <React.Fragment>
                <Nav >
                    Test Nav
                </Nav>
            </React.Fragment>
        )
    }
}

