import React from "react";
import { Col, Row } from "reactstrap";

const SIO = () => {
  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp" id='SIO'>
        <Row>
        
          <Col lg={12} md={6} xl={5}>
            <h3>Présentation BTS SIO<br/> & de ses spécialités</h3>
          </Col>
          <Col md={6} xl={7}>
            <div>
              <h2>Option SLAM</h2>
              <p>Débouchés :</p>
              <ul>
                <li>Développeur d'applications informatiques</li>
                <li>Développeur informatique</li>
                <li>Analyste d'applications ou d'études</li>
                <li>Analyste programmeur</li>
                <li>Chargé d'études informatiques</li>
                <li>Programmeur analyste</li>
                <li>Programmeur d'applications</li>
                <li>Responsable des services applicatifs</li>
              </ul>
            </div>
            <div>
              <h2>Option SISR</h2>
              <p>Débouchés :</p>
              <ul>
                <li>Technicien de production</li>
                <li>Technicien d’infrastructure</li>
                <li>Technicien réseau et télécoms</li>
                <li>Technicien systèmes et réseaux</li>
                <li>Administrateur systèmes et réseaux</li>
                <li>Support systèmes et réseaux</li>
                <li>Pilote d’exploitation</li>
                <li>Informaticien support et déploiement</li>
              </ul>
            </div>
            <hr />
            <div>
              <h1>Le Developpement Web</h1>
              <p>Le BTS SIO option SLAM forme des spécialistes de l'informatique capables de concevoir, de développer et de mettre en œuvre des solutions logicielles adaptées aux besoins de l'entreprise, en utilisant des technologies récentes et en suivant des méthodes de travail rigoureuses</p>
            </div>
            <hr />
            <div>
              <h1>La Cybersécurité</h1>
              <p>La cybersécurité, ou sécurité informatique, est l'ensemble des mesures prises pour protéger les systèmes informatiques, les réseaux et les données contre les menaces et les attaques numériques. Cela inclut la protection contre les virus, les logiciels malveillants, les attaques de phishing, les cyberattaques, les vols de données, le piratage et d'autres menaces en ligne.</p>
            </div>
            <hr />
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default SIO;
