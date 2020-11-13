import React, { Component } from 'react'
import styled from 'styled-components'
const Container = styled.div`
  background-color: ${props => props.bgcolor};
  width: 100%;
  height:auto;
  min-height: 90vh; 
text-align:center; 
`
export default class home extends Component {
    render() {
        return (
            <React.Fragment>
                <Container bgcolor="skyblue">
                    <h1>Home</h1>
                </Container>
            </React.Fragment>
        )
    }
}
