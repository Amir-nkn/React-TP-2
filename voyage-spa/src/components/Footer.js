// src/components/Footer.js

// Importation de Link pour créer des liens internes avec react-router
import { Link } from "react-router-dom";

// Déclaration du composant Footer
const Footer = () => {
  return (
    // Pied de page avec fond bleu, texte blanc, marge supérieure et padding vertical
    <footer className="bg-blue-600 text-white mt-10 py-6">
      {/* Conteneur centré avec une disposition en colonne sur mobile et en ligne sur desktop */}
      <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* 🔗 Lien vers la page "À propos" */}
        <div className="mb-4 md:mb-0">
          <Link to="/apropos" className="hover:underline text-sm md:text-base">
            À propos de l’agence
          </Link>
        </div>

        {/* 🔸 Texte de copyright affichant l'année en cours dynamiquement */}
        <p className="text-xs md:text-sm text-center">
          © {new Date().getFullYear()} Agence de Voyages — Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

// Exportation du composant Footer pour l'utiliser dans l'application
export default Footer;
