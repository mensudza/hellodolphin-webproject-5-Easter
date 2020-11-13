import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: ${props => props.bgcolor};
  width: 100%;
  height:auto;
  min-height: 90vh; 
text-align:center; 
`

export default class organizer extends Component {
    render() {
        return (
            <div>
                <Container bgcolor="pink.">
                    <h2>organizer</h2>
                </Container>
            </div>
        )
    }
}
