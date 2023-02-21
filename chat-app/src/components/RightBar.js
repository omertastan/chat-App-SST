import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


const RightBar = () => {
    return (
        <Row className='RightBarRow'>
            <Col xs={12} className="logoCol">
                <Row className="logoColRow">
                    <Col xs={12} >
                        <h1 className='logoColheader'>ssttek</h1>
                    </Col>
                    <Col className='logoColheader4' xs={12} >
                        <h4>www.ssttek.com</h4>
                    </Col>
                </Row>
            </Col>
            <Col xs={12} className="emailCol pt-5">
                <Row className="emailColRow ">
                    <Col xs={12} >
                        <h4 className='emailColheader'>EMAIL</h4>
                    </Col>
                    <Col className='emailColheaderP' xs={12} >
                        <p>ssttech@example.com</p>
                    </Col>
                </Row>
                <Row className="logoColRow pt-3">
                    <Col xs={12} >
                        <h4 className='emailColheader'>PHONE</h4>
                    </Col>
                    <Col className='emailColheaderP' xs={12} >
                        <p>+04-123456789</p>
                    </Col>
                </Row>
            </Col>
            <Col xs={12} className="labelCol">
                <Row className="emailColRow pt-3">
                    <Col xs={12} >
                        <h4 className='emailColheader'>LABELS</h4>
                    </Col>
                    <Col className='emailColheaderP' xs={12} >
                        <Row className="cardRow">
                            <Col xs={6}><Card className="cardRowCard px-1">Bot x</Card></Col>
                            <Col xs={6}><Card className="cardRowCard px-1">React x</Card></Col>
                        </Row>

                    </Col>
                </Row>
            </Col>
            <Col xs={12} className="attachmentsCol">
                <Row className="logoColRow pt-3">
                    <Col xs={12} >
                        <h4 className='emailColheader'>ATTACHMENTS</h4>
                    </Col>
                    <Col className='emailColheaderP' xs={12} >
                        <p>Dataset.csv</p>
                    </Col>
                    <Col className='emailColheaderP ' xs={12} >
                        <p>bot_face.jpg</p>
                    </Col>
                    <Col className='emailColheaderP' xs={12} >
                        <button className='viewAllBtn'>View All</button>
                    </Col>
                </Row>
                <Row className="reactBtnRow px-5"><button className='reactBtn'>React</button></Row>
            </Col>


        </Row>
    )
}

export default RightBar