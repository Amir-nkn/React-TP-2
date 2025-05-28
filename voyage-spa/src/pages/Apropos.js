// src/pages/Apropos.js

// Importation de Link depuis react-router-dom pour retourner à la page d’accueil
import { Link } from "react-router-dom";

// Déclaration du composant Apropos
const Apropos = () => {
  return (
    // Conteneur principal centré avec du padding, fond blanc, ombre et coins arrondis
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow rounded-lg">
      {/* Titre de la section "À propos" */}
      <h2 className="text-2xl font-bold text-blue-800 mb-4">
        À propos de notre agence
      </h2>

      {/* Paragraphe d’introduction de l’agence avec texte stylisé */}
      <p className="mb-4 text-gray-700 leading-relaxed">
        Bienvenue chez <strong>Voyages Horizon</strong>, une agence spécialisée
        dans les expériences touristiques inoubliables. Depuis notre création,
        nous nous engageons à offrir à nos clients des forfaits adaptés à tous
        les goûts :
        <span className="text-blue-700 font-medium">
          {" "}
          aventure, détente, culture et découvertes.
        </span>
      </p>

      {/* Deuxième paragraphe décrivant les types de forfaits proposés */}
      <p className="mb-4 text-gray-700 leading-relaxed">
        Nos forfaits sont sélectionnés avec soin pour garantir confort, sécurité
        et authenticité. Que vous rêviez de plages paradisiaques, de villes
        historiques ou d’escapades nature, nous avons ce qu’il vous faut.
      </p>

      {/* Encadré avec les informations techniques de l’application */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
        <p className="text-sm text-blue-900">
          Version de l’application : <strong>1.0</strong>
        </p>
        <p className="text-sm text-blue-900">Dernière mise à jour : Mai 2025</p>
      </div>

      {/* Lien de retour vers la page d’accueil */}
      <Link
        to="/"
        className="inline-block mt-4 text-blue-600 hover:underline font-medium"
      >
        ← Retour à l'accueil
      </Link>
    </div>
  );
};

// Exportation du composant Apropos
export default Apropos;
