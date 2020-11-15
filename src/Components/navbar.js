import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
/* Images */
import cld01 from './images/navbar/cdnav.png'
import cld02 from './images/navbar/navbar1.png'
import eg1 from './images/navbar/about.png'
import eg2 from './images/navbar/activity.png'
import eg3 from './images/navbar/history.png'
import eg4 from './images/navbar/home.png'
import eg5 from './images/navbar/symbol.png'
/* CSS */
import 'bootstrap/dist/css/bootstrap.min.css'
const yourAnimation = keyframes`
    from {
        transform: translate(0,20px);
    }

    to {
        transform:  translate(0,50px);
    }
    
   
`


const Container = styled.div`
    background-color: #BBB6D6;
    width : auto;
    height : 25vh;
`
const Cloud = styled.img`
    width: 100%;
    left: 0px;
    position: absolute;
    margin-top: ${props => props.marginTop};
`
const Eggs = styled.img`
    width: 5%;
    left: ${props => props.left};
    top: ${props => props.top};
    position: absolute;
    margin-top: ${props => props.marginTop};
    /* left: 146px;  */
    :hover{
        animation: ${yourAnimation} 5s linear 0s normal;
    }
`
export default class navbar extends Component {
    render() {
        return (
            <React.Fragment>
                <Container className="container-fluid">
                    {/* <Cloud src={cld02} marginTop="-60px"/> */}
                    <Cloud src={cld01} marginTop="-60px" />
                    <Eggs src={eg4} left="142px" top="158px" />
                    <Eggs src={eg1} left="439px" top="154px" />
                    <Eggs src={eg3} left="717px" top="158px" />
                    <Eggs src={eg5} left="1004px" top="154px" />
                    <Eggs src={eg2} left="1299px" top="158px" />
                </Container>
            </React.Fragment>
        )
    }
}

