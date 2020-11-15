import React, { Component } from 'react'
import styled from 'styled-components'
const Container = styled.div`
  background-color: ${props => props.bgcolor};
  width: 100%;
  height:auto;
  min-height: 100vh; 
text-align:center; 
`

export default class symbol extends Component {
    render() {
        return (
            <div>
                <Container bgcolor="black">
                    <h2>Symbol</h2>
                </Container>
            </div>
        )
    }
}
