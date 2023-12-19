import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Entreprise = () => {
    return (
    <section className="skill" id="entreprise">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Entreprise</h2>
                        <p><strong>Aristid </strong> 
                        Spécialiste du retail, l'entreprise crée des outils technologiques adaptés aux besoins des clients et capables de concevoir à grande échelle des offres commerciales personnalisées. Elle digitalise les "process métiers" pour accélérer la transformation et accroître la rentabilité des clients.</p>
                        <p>Omnipublish Est une application web créée par Aristid pour permettre à ses clients de facilité la création d'offres commerciales, ils ont des clients principalement en France mais commencent à s'élargir vers d'autre régions du monde comme avec Sonae, une entreprise Portugaise</p>
                        <strong>Mon rôle dans l'entreprise</strong>
                        <p>Mon rôle dans l'entreprise est de répondre à des tickets d'amélioration crées par les clients, pour cela j'utilise les technologies suivantes : </p>
                        <ul style={{ listStyleType: 'none' }}>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript - Ajax</li>
                            <li>PHP - Zend Framework</li>
                            <li>SQL</li>
                            <li>Gitlab</li>
                            <li>Docker compose</li>
                            <li>VirtualBox</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
