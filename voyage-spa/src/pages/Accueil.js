// src/pages/Accueil.js

// Importation de Link pour la navigation interne avec react-router
import { Link } from "react-router-dom";

// Déclaration du composant Accueil
const Accueil = () => {
  return (
    // Conteneur centré avec fond en dégradé et padding vertical/horizontal
    <div className="text-center py-20 px-4 bg-gradient-to-br from-blue-100 via-white to-blue-50">
      {/* Titre principal de la page d'accueil */}
      <h2 className="text-4xl font-extrabold text-blue-700 mb-4">
        Bienvenue sur notre site de voyages
      </h2>

      {/* Texte d’introduction sous le titre */}
      <p className="text-lg text-gray-700 mb-8">
        Explorez les meilleures destinations avec nos forfaits exceptionnels.
      </p>

      {/* Bouton/lien vers la page des forfaits */}
      <Link
        to="/forfaits"
        className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-800 transition"
      >
        Voir les forfaits
      </Link>
    </div>
  );
};

// Exportation du composant Accueil
export default Accueil;
