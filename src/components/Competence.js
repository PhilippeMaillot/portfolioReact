import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

export const Competence = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const competences = [
    { name: "HTML", percent: 50 },
    { name: "CSS", percent: 50 },
    { name: "JavaScript", percent: 75 },
    { name: "React", percent: 75 },
    { name: "Node.js", percent: 70 },
    { name: "Express.js", percent: 60 },
    { name: "PHP", percent: 60 },
    { name: "SQL", percent: 66 },
    { name: "C#", percent: 40 },
    { name: ".NET", percent: 33 },
    { name: "Blazor", percent: 50 },
    { name: "Git", percent: 80 },
    { name: "Docker", percent: 45 },
  ];

  const CircleSkill = ({ percent }) => {
    const radius = 50;
    const stroke = 8;
    const normalizedRadius = radius - stroke * 0.5;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (percent / 100) * circumference;

    return (
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#e6e6e6"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#00bfff"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + " " + circumference}
          style={{ strokeDashoffset, transition: "stroke-dashoffset 0.5s ease" }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="16"
          fill="#fff"
        >
          {percent}%
        </text>
      </svg>
    );
  };

  return (
    <section className="skill" id="competences">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Compétences</h2>
              <br></br>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                {competences.map((comp, idx) => (
                  <div className="item text-center" key={idx}>
                    <CircleSkill percent={comp.percent} />
                    <h5 className="mt-2">{comp.name}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
