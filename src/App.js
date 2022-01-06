import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Col, Container, Modal, Nav, Navbar, Row} from "react-bootstrap";
import {FaEnvelope, FaGithub, FaLinkedinIn} from "react-icons/fa";
import {useState} from "react";
import Home from "./components/Home";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
      <>
     <Navbar bg="primary" expand="lg" className={"text-uppercase navbar-expand-lg navbar-light fixed-top"}
             id={"mainNav"} variant={"dark"}>
        <Container>
          <Navbar.Brand href="#mainNav">Certificate Generator</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">

              <Nav.Link href="#link" className={"navItem mx-0 mx-lg-1"} onClick={handleShow}>Login</Nav.Link>
              <Nav.Link href="#about" className={"navItem mx-0 mx-lg-1"}>About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <Modal id={"modal"} show={show} onHide={handleClose} align={"center"} centered size="lg"
             style={{"font-family": "Montserrat"}}>
        <Modal.Header closeButton>
          <Modal.Title>Club login</Modal.Title>
        </Modal.Header>
        <Modal.Body><div className={"text-danger card-text"}> Under Development!</div> </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            LOGIN
          </Button>
        </Modal.Footer>
      </Modal>



        <Home/>




        <footer className="text-center footer" id={"about"}>
          <Container>
            <Row>
              <Col className="col-md-4 mb-5 mb-lg-0">
                <h4 className="text-uppercase mb-4">MORE</h4>

                  <a href={"https://github.com/rohankaran/certificate-generator/issues/new/choose"}
                     target={"_blank"}
                     className={"text-white text-decoration-none"}>
                    <p>Report a bug</p>
                  </a>

                  <a href={"https://github.com/rohankaran/certificate-generator"}
                     target={"_blank"}
                        className={"text-white text-decoration-none"}>
                    <p>
                      View app source
                    </p>
                  </a>

              </Col>
              <Col className="col-md-4 mb-5 mb-lg-0">
                <h4 className="text-uppercase mb-4">CONTACT</h4>
                <ul className="list-inline">
                  <li className="list-inline-item"><Button
                      variant="outline-light rounded-circle" role="button"
                      target={"_blank"}
                      href="https://linkedin.com/in/rohankaran001">
                    <FaLinkedinIn className={"mb-1"}/>
                  </Button></li>
                  <li className="list-inline-item"><Button
                      variant="outline-light rounded-circle" role="button"
                      href="https://github.com/rohankaran"
                      target={"_blank"}
                  >
                    <FaGithub className={"mb-1"}/>
                  </Button></li>
                  <li className="list-inline-item"><Button
                      variant="outline-light rounded-circle" role="button"
                      href="mailto:rohankaran001@gmail.com"
                      target={"_blank"}
                  >
                    <FaEnvelope className={"mb-1"}/>
                  </Button></li>
                </ul>
              </Col>
              <Col className="col-md-4 mb-5 mb-lg-0">
                <h4 className="text-uppercase mb-4">About</h4>
                <p>Certificate Generator web site created using FastAPI and React</p>
              </Col>
            </Row>
          </Container>

        </footer>
        <div className="text-center text-white copyright card-text py-4" style={{background:"#283848"}}>
          <Container>
            <small>© 1.0.0</small>
          </Container>
        </div>
        </>
  );
}

export default App;
