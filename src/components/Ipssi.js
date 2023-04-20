import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Ipssi = () => {
    return (
    <section className="skill" id="ipssi">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>IPSSI</h2>
                        <p>L'IPSSI est une école d'informatique située à Saint Quentin en Yvelines. Elle propose des formations en informatique allant de Bac+2 à Bac+5. Les domaines de formation comprennent le développement web, la cybersécurité, l'intelligence artificielle, le big data, et bien plus encore.</p>
                        <p>Les cours sont dispensés par des professionnels expérimentés et des experts du domaine de l'informatique. L'IPSSI dispose également d'un réseau d'entreprises partenaires pour aider les étudiants à trouver des stages et des opportunités professionnelles.</p>
                        <p>Si vous êtes intéressé par une carrière dans le domaine de l'informatique, l'IPSSI est l'endroit idéal pour vous. Pour plus d'informations, veuillez visiter le site web de l'école : <a href="https://ecole-ipssi.com/ecole-informatique-saint-quentin-en-yvelines/" target="_blank">https://ecole-ipssi.com</a></p>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
