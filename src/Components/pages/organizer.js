import React, { Component } from 'react'
import styled from 'styled-components'
import test2 from '../images/Pic/test2.png'
import cloud2 from '../images/Pic/cloud2.png'
import br from '../images/Pic/br.png'
import rabbit4 from '../images/Mascot/rabbit4.png'
import '../../index.css'

const Container = styled.div`
  background-color: ${props => props.bgcolor};
  width: 100%;
  height:auto;
  min-height: 100vh; 
text-align:center; 
`

export default class organizer extends Component {
    render() {
        return (
            <div>
                
                <Container bgcolor="#A2E3FF">
                    <div className="counter">
                        <img className="test2" src={test2} />
                        <img className="rabbit4" src={rabbit4} />
                        <img className="cloud2" src={cloud2} />
                        <img className="cloud2l" src={cloud2} />
                        <img className="br" src={br} />
                        
                    </div>
                    
                    <div className="footer">
                        <h2>ฝ่าย Web design</h2>
                        <div className="flex content-center">
                            <p>นางสาวปณาลี ปาลศรี</p>
                            <p>นางสาวพัทธ์ธีรา จงวัฒนานุกูล</p>
                        </div>

                        <h2> ฝ่าย Front-End</h2>
                        <div className="flex content-center">
                            <p>นายธาราดล เผือกเอี่ยม</p>
                            <p>นายทศวรรษ สมตัว</p>
                            <p>นางสาวบุรัสกร บุญมา</p>
                        </div>

                        <h2>ฝ่าย Infrastructure</h2>
                        <p>นางสาวสุกัญญา ชินวิชา</p>


                    </div>
                </Container>
            </div>
        )
    }
}
