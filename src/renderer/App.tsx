import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MiniMap from '../components/mini-map';
import ThreeBackground from 'components/three-background';
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

const Hello = () => {
  return (
    <div>
      <Container>
      <Row>
        <Col>
          <MiniMap></MiniMap>
        </Col>
        <Col sm={8} color={"red"}><ThreeBackground></ThreeBackground></Col>
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
