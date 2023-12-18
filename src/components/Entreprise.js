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
                        <p>
  <strong>Aristid </strong> 
  Spécialiste du retail, l'entreprise crée des outils technologiques adaptés aux besoins des clients et capables de concevoir à grande échelle des offres commerciales personnalisées. Elle digitalise les "process métiers" pour accélérer la transformation et accroître la rentabilité des clients.
</p>

<p>Omnipublish Est une application web créée par Aristid pour permettre à ses clients de facilité la création d'offres commerciales, ils ont des clients principalement en France mais commencent à s'élargir vers d'autre régions du monde comme avec Sonae, une entreprise Portugaise</p>
                        <p>Tickets</p>
                        <p>Galec : <a href ="https://unisson.aristid.com/browse/OPSPE-3275" target='_blank'>Changement de mail lors d'une création de version</a></p>
                        <p> - <a href='https://unisson.aristid.com/browse/OPSPE-3318' target='_blank'>Envoie d'un mail lors de l'execution d'un plugin uniquement lorsque l'image envoyée est ko</a></p>
                        <p>Carrefour : <a href='https://unisson.aristid.com/browse/OPSPE-3269' target='_blank'>Exclure une mention sur Omnipublish selon l'id du projet</a></p>
                        <p> - <a href='https://unisson.aristid.com/browse/OPSPE-3265' target='_blank'>Création de hook qui ajoute un UB à un projet si il fait partie des merilleures promos</a></p>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
