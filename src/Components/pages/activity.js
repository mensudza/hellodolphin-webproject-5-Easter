import React, { Component } from 'react'
import styled from 'styled-components'
import ac from '../images/navbar/ac.png'
import cloud3 from '../images/Pic/cloud3.png'

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
                <Container bgcolor="#A2E3FF">
                    <div className="counter">
                        <img className="cloud3" src={cloud3} /> 
                        <img className="ac" src={ac} />
                  
                    </div>
                
                </Container>
            </div>
        )
    }
}
