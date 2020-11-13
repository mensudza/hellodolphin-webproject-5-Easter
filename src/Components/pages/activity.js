import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: ${props => props.bgcolor};
  width: 100%;
  height:auto;
  min-height: 90vh; 
text-align:center; 
`

export default class activity extends Component {
    render() {
        return (
            <div>
                <Container bgcolor="blue">
                    <h2>activity</h2>
                </Container>
            </div>
        )
    }
}
