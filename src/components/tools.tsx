import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { Container, Card } from 'react-bootstrap';

class Tools extends React.Component{
    render(){
        return(
            <div className="tools">
                <Card style={{ width: 'auto' }}>
                    <Card.Header><h2>Tools</h2></Card.Header>
                    <Card.Body>
                        <Container>
                            <Col>
                                <Button id ="art-work">Artwork</Button>
                                <Button id ="screenshot">Screenshot</Button>
                                <Button id="tool-switch">Switch Tools</Button>
                                <Button id="tool-toggle">Enable/Disable Tools</Button>
                            </Col>
                        </Container>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
export default Tools;
