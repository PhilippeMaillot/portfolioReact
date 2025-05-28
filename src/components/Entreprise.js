import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

export const Entreprise = () => {
  return (
    <section className="skill" id="entreprise">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2 className="mb-5">Expériences en entreprise</h2>
              <div className="row">
                {/* Expérience Aristid */}
                <div className="col-md-6 mb-4">
                  <div className="p-3 border rounded shadow-sm h-100">
                    <h4>Aristid – 2e année de BTS</h4>
                    <p>
                      J’ai contribué au développement de l’application web <strong>Omnipublish</strong>, utilisée pour la gestion d’offres commerciales.
                      Mon travail consistait à traiter des <strong>tickets d’amélioration</strong> soumis par les clients, en apportant des corrections
                      ou de nouvelles fonctionnalités sur l’interface et le cœur applicatif.
                    </p>
                    <p><strong>Technologies utilisées :</strong></p>
                    <ul className="list-unstyled">
                      <li>• HTML / CSS</li>
                      <li>• JavaScript (Ajax)</li>
                      <li>• PHP (Zend Framework)</li>
                      <li>• SQL</li>
                      <li>• GitLab</li>
                      <li>• Docker Compose</li>
                      <li>• VirtualBox</li>
                    </ul>
                  </div>
                </div>

                {/* Expérience GTT */}
                <div className="col-md-6 mb-4">
                  <div className="p-3 border rounded shadow-sm h-100">
                    <h4>GTT – Année de Bachelor</h4>
                    <p>
                      Chez <strong>GTT</strong>, j’ai participé à plusieurs projets internes en intégrant de nouvelles <strong>fonctionnalités</strong> dans des applications existantes,
                      tout en respectant les <strong>conventions de code établies</strong>. J’ai évolué dans un environnement orienté Microsoft avec des technologies modernes.
                    </p>
                    <p><strong>Technologies utilisées :</strong></p>
                    <ul className="list-unstyled">
                      <li>• C#</li>
                      <li>• .NET</li>
                      <li>• Blazor</li>
                      <li>• SQL Server</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
