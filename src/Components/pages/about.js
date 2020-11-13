import React, { Component } from 'react'
import styled from 'styled-components'
const Container = styled.div`
  background-color: ${props => props.bgcolor};
  width: 100%;
  height:auto;
  min-height: 90vh; 
text-align:center; 
`
export default class about extends Component {
    render() {
        return (
            <React.Fragment>
                <Container bgcolor="orange">
                    <h2>About</h2>
                </Container>
            </React.Fragment>
        )
    }
}
