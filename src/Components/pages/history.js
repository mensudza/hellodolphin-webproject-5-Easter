import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: ${props => props.bgcolor};
  width: 100%;
  height:auto;
  min-height: 90vh; 
text-align:center; 
`

export default class history extends Component {
    render() {
        return (
            <div>
                <Container bgcolor="red">
                    <h2>history</h2>
                </Container>
            </div>
        )
    }
}
