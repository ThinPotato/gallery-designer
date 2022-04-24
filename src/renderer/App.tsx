import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThreeBackground from 'components/three-background';
import { Container, Col, Row } from 'react-bootstrap';
import MiniMap from '../components/mini-map';

const Hello = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <MiniMap />
          </Col>
          <Col sm={8} color="red">
            <ThreeBackground />
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
