// src/pages/ForfaitDetail.js

// Importation des hooks et fonctions nécessaires depuis react et react-router-dom
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

// Déclaration du composant ForfaitDetail
const ForfaitDetail = () => {
  // Récupération de l’identifiant depuis l’URL
  const { id } = useParams();

  // État local pour stocker les données du forfait
  const [forfait, setForfait] = useState(null);

  // Utilisation de useEffect pour récupérer les données du forfait depuis l’API
  useEffect(() => {
    fetch(`http://localhost:5000/forfaits/${id}`)
      .then((res) => res.json())
      .then((data) => setForfait(data)) // Mise à jour de l’état avec les données reçues
      .catch((err) => console.error("Erreur fetch:", err)); // Gestion des erreurs
  }, [id]); // Dépendance : effect relancé si l’ID change

  // Affichage d’un message pendant le chargement
  if (!forfait) return <p>Chargement...</p>;

  return (
    // Affichage des détails du forfait sous forme de carte
    <div className="p-4 border rounded bg-white shadow max-w-xl mx-auto mt-8">
      {/* Titre du forfait */}
      <h2 className="text-2xl font-bold mb-2">{forfait.nom}</h2>

      {/* Description du forfait */}
      <p className="mb-2">{forfait.description}</p>

      {/* Catégorie du forfait */}
      <p className="text-sm mb-1">
        <strong>Catégorie:</strong> {forfait.categorie}
      </p>

      {/* Prix du forfait */}
      <p className="text-sm mb-4">
        <strong>Prix:</strong> {forfait.prix} $
      </p>

      {/* Lien de retour vers la page de liste des forfaits */}
      <Link to="/forfaits" className="text-blue-700 hover:underline">
        ← Retour à la liste
      </Link>
    </div>
  );
};

// Exportation du composant
export default ForfaitDetail;
