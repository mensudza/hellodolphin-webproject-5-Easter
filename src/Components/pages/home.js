import React, { Component } from 'react'
import styled from 'styled-components'
/* Images */
import cd1 from '../images/Pic/cld1.png'
import cd2 from '../images/Pic/cd2.png'
import cd3 from '../images/Pic/cd3.png'
import etf from '../images/LOGO/lg4.png'
import mascot from '../images/Mascot/mascot1.png'
/* CSS */
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../index.css'

const Container = styled.div`
    background-color: #BBB6D6;
    width: 100%;
    min-height: 100vh; 
    padding-bottom: 300px;
    padding-top: 100px;
    overflow: hidden;
`
const Cloud = styled.img`
    width: 100%;
    left: 0px;
    position: absolute;
    margin-top: ${props=> props.marginTop};
`
const AnimateCloud = styled.img`
    width: 125%;
    left: -33vh;
    position: absolute;
    margin-top: ${props=> props.marginTop};
`
const Mascot = styled.img`
    width : 25%;
    left : 7%;
    position :absolute;
    margin-top : 9%;
`
const Logo = styled.img`
    width : 40%;
    position : absolute;
    left: 30%;
`

export default class home extends Component {
    render() {
        return (
            <React.Fragment>
                <Container className="container-fluid">
                    <div className="row">
                        <div className="col-12"> 
                            <AnimateCloud className="prawit" src={cd3} marginTop="32.5vh"/>
                            <Logo src={etf}/>
                            <AnimateCloud className="prayuth" src={cd2} marginTop="40vh"/>
                            <Mascot src={mascot}/>
                            {/* <Cloud src={cd1} marginTop="70vh"/> */}
                            </div>
                        </div>
                </Container>
            </React.Fragment>
        )
    }
}
