// Importation du composant Link depuis react-router-dom pour la navigation sans rechargement de page
import { Link } from "react-router-dom";

// Déclaration du composant Header
const Header = () => {
  return (
    // En-tête avec fond bleu, texte blanc, padding et disposition en flex
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      {/* Titre principal du site avec un lien vers la page d'accueil */}
      <h1 className="text-xl font-bold">
        <Link to="/">Agence de Voyages</Link>
      </h1>

      {/* Menu de navigation avec des liens vers différentes pages */}
      <nav className="space-x-4">
        <Link to="/" className="hover:underline">
          Accueil
        </Link>
        <Link to="/forfaits" className="hover:underline">
          Forfaits
        </Link>
        <Link to="/apropos" className="hover:underline">
          À propos
        </Link>
      </nav>
    </header>
  );
};

// Exportation du composant Header pour pouvoir l’utiliser ailleurs dans l’application
export default Header;
