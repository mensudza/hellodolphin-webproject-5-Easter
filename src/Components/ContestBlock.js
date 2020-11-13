import React, { Component } from 'react'
import styled from 'styled-components'

const ContentContainer = styled.div`
    width: auto;
    height: auto;
    padding: 20px;
    border: 1px solod #ffff00;
    border-radius: 5px;
    background-color: white;
`
const Header = styled.h1`
    font-size: 18px;
`


export default class ContentBlock extends Component {
    render() {
        return (
            <ContentContainer>
                <Header>{this.props.header}</Header>
                <p>{this.props.paragraph}</p>
                {this.props.children}
            </ContentContainer>
        )
    }
}
