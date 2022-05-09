import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThreeBackground from 'components/three-background';
import ArtBar from '../components/artbar';
import { Container, Col, Row } from 'react-bootstrap';
import MiniMap from '../components/mini-map';
import Tools from 'components/tools';

export var currentImage = "file:/Users/michul/Desktop/testimages/FIRE.jpg"


const Hello = () => {
  return (
    <div>
      <Container fluid="true">
        <Row>
          <Col sm ={3}>
            <MiniMap />
            <Tools />
          </Col>
          <Col sm={9} color="red">
            <ThreeBackground />
          </Col>
          <Col>
            <ArtBar />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
