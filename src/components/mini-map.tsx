import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { Container, Card } from 'react-bootstrap';

class MiniMap extends React.Component{
    render(){
        return(
            <div className="mini-map">
                <Card style={{ width: 'auto'}}>
                    <Card.Header><h2>View</h2></Card.Header>
                    <Card.Body>
                        <Container>
                            <Col>
                                <Button id="left-wall">Left Wall</Button>
                                <Button id="right-wall">Right wall</Button>
                                <Button id="middle-wall-left">Middle wall Left</Button>
                                <Button id="middle-wall-right">Middle wall Right</Button>
                                <Button id="little-wall">Little Wall</Button>
                                <Button id="back-wall">Back wall</Button>
                            </Col>
                        </Container>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
export default MiniMap;
