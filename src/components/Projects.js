import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/non-disponible.webp";
import projImg4 from "../assets/img/SSR.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "GLPI",
      description: "Ticketing",
      imgUrl: projImg1,
      docUrl: "/doc/GLPI.pdf",
      target: "_blank",
    },
    {
      title: "Site Librairie",
      description: "Création d'un site librairie reprenant les livres de l'api books de google",
      imgUrl: projImg2,
      docUrl: "/doc/Doc_librairie.pdf",
      target: "_blank",
    },
  ];
  const projectsSecondTab = [
    {
      title: "Projet AP 1",
      description: "Création d'une entreprise fictive du nom de SSR Pro.",
      imgUrl: projImg4,
      docUrl: "/doc/ap1.zip",
      target: "_blank",
    },
    {
      title: "Projet AP 2",
      description: "Proposition des solutions aux problématiques",
      imgUrl: projImg3,
      docUrl: "/doc/projet1.pdf",
      target: "_blank",
    },
    {
      title: "Projet AP 3",
      description: "Mise en place des solutions pour le client",
      imgUrl: projImg3,
      docUrl: "./documentation/projet1.pdf",
      target: "_blank",
    },
    {
      title: "Projet AP 4",
      description: "Tester et améliorer des solutions en existantes",
      imgUrl: projImg3,
      docUrl: "./documentation/projet1.pdf",
      target: "_blank",
    },
    
  ];
  const projectsThirdTab = [
    {
      title: "Site librairie",
      description: "Création d'un site librairie reprenant les livres de l'api books de google",
      imgUrl: projImg2,
      docUrl: "/doc/TpLibrairie.rar",
      target: "_blank",
    },
    {
      title: "Calculatrice",
      description: "Création d'une calculatrice en JS",
      imgUrl: projImg3,
      docUrl: "/doc/Calculatrice.zip",
      target: "_blank",
    },
    {
      title: "HTML Translator",
      description: "Traducteur de code HTML",
      imgUrl: projImg3,
      docUrl: "/doc/HTMLTranslator.zip",
      target: "_blank",
    },
    {
      title: "Pierre, Feuille, Ciseaux",
      description: "Création d'un jeu pierre, feuille, ciseaux en JS",
      imgUrl: projImg3,
      docUrl: "/doc/PierreFeuilleCiseaux.zip",
      target: "_blank",
    },
    {
      title: "Random Quote",
      description: "Generateur de citations aléatoires",
      imgUrl: projImg3,
      docUrl: "/doc/RandomQuote.zip",
      target: "_blank",
    },
    {
      title: "Site web Lego",
      description: "Premier projet de l'année, Site web Lego",
      imgUrl: projImg3,
      docUrl: "/doc/SiteLego.zip",
      target: "_blank",
    },
    {
      title: "Todo list",
      description: "To Do list en JS",
      imgUrl: projImg3,
      docUrl: "/doc/ToDoList.zip",
      target: "_blank",
    },
  ];

   
  

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projets</h2>
                <br></br>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Documentation</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Projets AP</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">TP's</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                title={project.title}
                                description={project.description}
                                imgUrl={project.imgUrl}
                                docUrl={project.docUrl}
                              /> 
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projectsSecondTab.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                title={project.title}
                                description={project.description}
                                imgUrl={project.imgUrl}
                                docUrl={project.docUrl}
                              /> 
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projectsThirdTab.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                title={project.title}
                                description={project.description}
                                imgUrl={project.imgUrl}
                                docUrl={project.docUrl}
                              /> 
                            )
                          })
                        }
                      </Row>
            </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
