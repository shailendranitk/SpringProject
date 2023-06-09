
import './App.css';
import Header from './components/Header';
import AllEmployee from './components/AllEmployee';
import AddEmployee from './components/AddEmployee';
import { Col, Container, Row } from 'reactstrap';
import Menus from './components/Menus';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';



function App() {
  return (
    <div>
      <Router>
        <ToastContainer />
        <Container>
          <Header />

          <Row>
            <Col md={4}>
              <Menus />
            </Col>

            <Col md={8}>
              <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="add-employee" element={<AddEmployee/>} exact />
                <Route path="update-employee" element={<Home/>} exact />
                <Route path="all-employee" element={<AllEmployee/>} exact />
              </Routes>
            </Col>

          </Row>


        </Container>
      </Router>

    </div>

  );
}

export default App;
