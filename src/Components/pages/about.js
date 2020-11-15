import React, { Component } from 'react';
import styled from 'styled-components';
/* Image */
import ab2 from '../images/navbar/ab2.png';
import cd01 from '../images/Pic/cloud2.png';
import cd02 from '../images/Pic/cloud3.png';
import mascot from '../images/Mascot/rabbit2.png'
import cd1 from '../images/Pic/cd1.png'
/* CSS */
import '../../index.css'

const Container = styled.div`
    background-color: #A2E3FF;
    width: 100%;
    min-height: 100vh; 
    padding-bottom: 300px;
    padding-top: 200px;
    text-align: center;
    overflow: hidden;
`
const Ab2 = styled.img`
    margin-top: 50%;
    position:relative;
    filter: drop-shadow(5px 6px 4px rgba(0,0,0,0.25));
`
const Cloud = styled.img`
    width: 100%;
    left: ${props => props.left};
    position: absolute;
    margin-top: ${props => props.marginTop};
`
const AnimateCloud = styled.img`
    width: 125%;
    left: -33vh;
    position: absolute;
    margin-top: ${props => props.marginTop};
`
const Mascot = styled.img`
    width: 50%;
    margin-top: 25%;
    right: 40% ;
    position :absolute;
`
const Contentblock = styled.div`
    padding : 0em;
    position: center;
    background-color: #F5CCD2;
    border-radius: 50px;
    width: 500px;
    height: 200px;
    box-sizing: border-box;
`
const Content = styled.p`
    border: 2px dashed #333333;
    border-radius: 50px;
    padding: 25px;
    font-size: 20px;
    width: 500px;
    height: 200px;
    box-sizing: border-box;
`
export default class about extends Component {
    render() {
        return (
            <React.Fragment>
                <Container className="container-fluid">
                    <div className="row">
                        <AnimateCloud className="pranuth" src={cd1} left="0%" marginTop="-23%" />
                        <div className="col-4">
                            <Cloud src={cd01} left="-25%" marginTop="65%" />
                        </div>
                        <div className="col-4">
                            <Ab2 src={ab2} />
                            <Contentblock>
                                <Content>เป็นหนึ่งในเทศกาลที่สำคัญมากที่สุดในศาสนาคริสต์
                                จัดขึ้นเพื่อเฉลิมฉลองการคืนพระชนม์ของพระเยซูหลังจากที่ทรง
                                ถูกตรึงกางเขนและสิ้นพระชนม์ไปแล้ว 3 วัน โดยวันที่จะ
                                เปลี่ยนไปในแต่ละปีแต่กำหนดให้ทุกปีต้องจัดขึ้นใน<br/>
                                    <normal>“วันอาทิตย์”</normal>
                                </Content>
                            </Contentblock>
                        </div>
                        <div className="col-4">
                            <Mascot src={mascot} />
                            <Cloud src={cd02} left="0%" marginTop="110%" />
                        </div>
                    </div>
                </Container>
            </React.Fragment>
        )
    }
}
