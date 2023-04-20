import { Col, Button } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const ProjectCard = ({ title, description, imgUrl, docUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} className="proj-img" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      <Button href={docUrl} download variant="primary" target='_blank' style={{ backgroundImage: `url(${colorSharp2})` }}>Télécharger</Button>
    </Col>
  )
}
