import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
//import projImg3 from "../assets/img/non-disponible.webp";
import projImg4 from "../assets/img/SSR.jpg";
import projImg5 from "../assets/img/calcul.png";
import projImg6 from "../assets/img/lego.png";
import projImg7 from "../assets/img/todo.png";
import projImg8 from "../assets/img/quote.png";
import projImg9 from "../assets/img/pfc.png";
import projImg10 from "../assets/img/html.png";
import projImg11 from "../assets/img/M2L-ICON.png";
import projImg12 from "../assets/img/omnimatch.png";
import projImg13 from "../assets/img/feedly.png";
import projImg14 from "../assets/img/omnibet-logo.png";
import projImg16 from "../assets/img/git-flow.jpg";
import projImg15 from "../assets/img/docker-compose.jpeg";
import projImg17 from "../assets/img/inventaire.png";
import projImg18 from "../assets/img/postman.png";
import projImg19 from "../assets/img/vm.jpg";
import projImg20 from "../assets/img/service.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "GLPI",
      description: "Ticketing",
      imgUrl: projImg1,
      docUrl:
        "https://drive.google.com/file/d/1i2J-giYocEFnajglyzuVCEmR7CR_X1n7/view?usp=sharing",
      target: "_blank",
    },
    {
      title: "Site Librairie",
      description:
        "Création d'un site librairie reprenant les livres de l'api books de google",
      imgUrl: projImg2,
      docUrl:
        "https://drive.google.com/file/d/14D6h8-mPlN2p57nYPgF3Kv_LLYjUol-N/view?usp=sharing",
      target: "_blank",
    },
    {
      title: "Feedly",
      description: "Documentation sur Feedly",
      imgUrl: projImg13,
      docUrl:
        "https://drive.google.com/file/d/1vSGqKjwQaWdRxT48O0ZHNpOCLDyzCA4u/view?usp=drive_link",
      target: "_blank",
    },
    {
      title: "Docker compose",
      description: "Documentation sur Docker compose",
      imgUrl: projImg15,
      docUrl:
        "https://drive.google.com/file/d/1hc7YGtf1DI9vlJpC1rIbCa0QHyPMa5yG/view?usp=sharing",
      target: "_blank",
    },
    {
      title: "Git-flow",
      description: "Documentation sur Git-flow",
      imgUrl: projImg16,
      docUrl:
        "https://drive.google.com/file/d/1vUYH9euy1NwUI0eNP78Yqw0t8MFPBNiv/view?usp=sharing",
      target: "_blank",
    },
    {
      title: "Inventaire",
      description: "Inventaire de notre serveur",
      imgUrl: projImg17,
      docUrl:
        "https://philippemaillot.github.io/portfolio/documents/inventaire.pdf",
      target: "_blank",
    },
    {
      title: "Postman",
      description: "Test des routes de l'api avec postman",
      imgUrl: projImg18,
      docUrl:
        "https://philippemaillot.github.io/portfolio/documents/doc_postman.pdf",
      target: "_blank",
    },
    {
      title: "Déployer une machine virtuelle",
      description: "Déploiement d'une machine virtuelle sur un serveur",
      imgUrl: projImg19,
      docUrl:
        "https://philippemaillot.github.io/portfolio/documents/vm.pdf",
      target: "_blank",
    },
    {
      title: "Déployer un service",
      description: "déploiement d'un service sur un serveur",
      imgUrl: projImg20,
      docUrl:
        "https://philippemaillot.github.io/portfolio/documents/service.pdf",
      target: "_blank",
    },
  ];
  const projectsSecondTab = [
    {
      title: "Projet AP 1",
      description: "Création d'une entreprise fictive du nom de SSR Pro.",
      imgUrl: projImg4,
      docUrl:
        "https://drive.google.com/file/d/1mD0YKSP_t7nVX7uOkKrx4vQXkAqnKJ6k/view?usp=share_link",
      target: "_blank",
    },
    {
      title: "Projet AP 2",
      description: "Proposition des solutions aux problématiques",
      imgUrl: projImg11,
      docUrl:
        "https://drive.google.com/file/d/1DCMcZacHuEG8_JJWVEHdgJw6ADo8kvna/view?usp=sharing",
      target: "_blank",
    },
    {
      title: "Projet AP 3",
      description: "Mise en place d'une application web pour le client",
      imgUrl: projImg12,
      docUrl: "https://github.com/M4tte78/Documentations-AP3-AP4/blob/main/AP3/Documentation-utilisation.pdf",
      target: "_blank",
    },
    {
      title: "Projet AP 4",
      description:
        "Mise en place d'une application mobile pour le client (En cours)",
      imgUrl: projImg14,
      docUrl: "https://github.com/M4tte78/AP4",
      target: "_blank",
    },
  ];
  const projectsThirdTab = [
    {
      title: "Site librairie",
      description:
        "Création d'un site librairie reprenant les livres de l'api books de google",
      imgUrl: projImg2,
      docUrl:
        "https://drive.google.com/file/d/1NtxFZA-CeGfreweG6DPbBJCx43YZ_8jp/view?usp=sharing",
      target: "_blank",
    },
    {
      title: "Calculatrice",
      description: "Création d'une calculatrice en JS",
      imgUrl: projImg5,
      docUrl:
        "https://drive.google.com/file/d/1npO5riwE-tAL_dJXHYOd10YsL2hXWFEx/view?usp=sharing",
      target: "_blank",
    },
    {
      title: "HTML Translator",
      description: "Traducteur de code HTML",
      imgUrl: projImg10,
      docUrl:
        "https://drive.google.com/file/d/1E3NwpYLvKxmPi0is83qWhLJ_Ct2WTk4N/view?usp=sharing",
      target: "_blank",
    },
    {
      title: "Pierre, Feuille, Ciseaux",
      description: "Création d'un pierre, feuille, ciseaux en JS",
      imgUrl: projImg9,
      docUrl:
        "https://drive.google.com/file/d/1hMcFHV8sbLW2Y6_k2zLcwHOfqk9fuqBF/view?usp=sharing",
      target: "_blank",
    },
    {
      title: "Random Quote",
      description: "Generateur de citations aléatoires",
      imgUrl: projImg8,
      docUrl:
        "https://drive.google.com/file/d/1xeQCe8dhHl42dB9pj44Czr9WPLYm9NuK/view?usp=share_link",
      target: "_blank",
    },
    {
      title: "Site web Lego",
      description: "Premier projet de l'année, Site web Lego",
      imgUrl: projImg6,
      docUrl:
        "https://drive.google.com/file/d/1v4CmwV1N9rJIgu0HTOE4BjZbT55VuA_S/view?usp=sharing",
      target: "_blank",
    },
    {
      title: "Todo list",
      description: "To Do list en JS",
      imgUrl: projImg7,
      docUrl:
        "https://drive.google.com/file/d/1dQE0CdNDpNvvH5yMPKYR7bUOyuEeyl18/view?usp=sharing",
      target: "_blank",
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projets</h2>
                  <p>
                    Voici les compétences que j'ai pu aquérir durant mes années
                    d'études et de mon stage{" "}
                    <a
                      href="https://drive.google.com/file/d/1LDhRwl1qN9shxlHczXu19-WKqGdbY2ja/view?usp=sharing"
                      target="_blank"
                    >
                      Tableau de compétences
                    </a>
                  </p>
                  <br></br>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Documentation</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Projets AP</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">TP</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                title={project.title}
                                description={project.description}
                                imgUrl={project.imgUrl}
                                docUrl={project.docUrl}
                              />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projectsSecondTab.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                title={project.title}
                                description={project.description}
                                imgUrl={project.imgUrl}
                                docUrl={project.docUrl}
                              />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projectsThirdTab.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                title={project.title}
                                description={project.description}
                                imgUrl={project.imgUrl}
                                docUrl={project.docUrl}
                              />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
