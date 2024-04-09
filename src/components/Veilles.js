import React, { useState } from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Veilles = () => {
  const [pdfVisible, setPdfVisible] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");

  const handleOpenButtonClick = (pdfUrl) => {
    setPdfUrl(pdfUrl);
    setPdfVisible(true);
  };

  const handleCloseButtonClick = () => {
    setPdfVisible(false);
  };

  return (
    <section className="contact" id="veilles">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Veilles Technologiques</h2>
                  <Button onClick={() => handleOpenButtonClick("https://philippemaillot.github.io/portfolio/documents/veille-casaos.pdf")}>CasaOS</Button>
                  <br></br>
                  <Button onClick={() => handleOpenButtonClick("https://philippemaillot.github.io/portfolio/documents/unity.pdf")}>Unity</Button>
                  <br></br>
                  <Button onClick={() => window.open("https://philippemaillot.github.io/portfolio/documents/google.pdf", "_blank")}>Google Alert</Button>
                  <br></br>
                  <Button onClick={() => window.open("https://philippemaillot.github.io/portfolio/documents/feedly.pdf", "_blank")}>Feedly</Button>
                  {pdfVisible &&
                    <div>
                      <Button onClick={handleCloseButtonClick}>Fermer le PDF</Button>
                      <iframe src={pdfUrl} style={{ width: "100%", height: "600px" }}></iframe>
                    </div>
                  }
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
