import React, { Component } from 'react'
import styled from 'styled-components'
import ac from '../images/navbar/ac.png'
import cloud3 from '../images/Pic/cloud3.png'
import draw4 from '../images/Pic/draw4.png'
import rabbit3 from '../images/Mascot/rabbit3.png'
import '../../index.css'

const Container = styled.div`
    background-color: ${props => props.bgcolor};
    width: 100%;
    height:100%;
    min-height: 100vh; 
    text-align:center; 
`

export default class activity extends Component {
    render() {
        return (
            <div>
                <Container bgcolor="#A2E3FF">
                    <div className="counter2">
                        <img className="cloud3" src={cloud3} />
                        <img className="ac" src={ac} />
                        <img className="rabbit-fly" src={rabbit3} />
                        <div className="rectangle">
                            <img class="draw4 "  src={draw4} />
                        </div>
                       
                        
                    </div>
                </Container>
            </div>
        )
    }
}
