import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Entreprise = () => {
    return (
    <section className="skill" id="entreprise">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Entrepise</h2>
                        <p>Ici seront entreposés mes projets effectués en entreprise</p>
                        <p>Stage de fin d'année chez : <a href="https://www.aristid.com" target='_blank'>Aristid</a></p>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
