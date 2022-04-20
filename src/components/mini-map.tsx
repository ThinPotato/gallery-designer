import React from "react";
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";

class MiniMap extends React.Component{
    render(){
        return(
            <div className="mini-map">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Container>
                            <Col>
                                <Button>Back wall</Button>
                                <Button>Left Wall</Button>
                                <Button>Right wall</Button>
                                <Button>Middle wall Left</Button>
                                <Button>Middle wall Right</Button>
                                <Button>Little Wall</Button>
                            </Col>
                        </Container>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default MiniMap