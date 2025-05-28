// Importation des hooks useState et useEffect depuis React
import { useState, useEffect } from "react";

// Importation du composant pour ajouter un nouveau forfait
import AddForfait from "../components/AddForfait";

// Importation de Link pour la navigation interne
import { Link } from "react-router-dom";

// Déclaration du composant principal Forfaits
const Forfaits = () => {
  // État pour stocker la liste des forfaits
  const [forfaits, setForfaits] = useState([]);

  // État pour afficher ou cacher le formulaire d’ajout
  const [showAddForm, setShowAddForm] = useState(false);

  // Récupération des forfaits depuis le serveur lors du premier rendu
  useEffect(() => {
    const fetchForfaits = async () => {
      const res = await fetch("http://localhost:5000/forfaits");
      const data = await res.json();
      setForfaits(data);
    };
    fetchForfaits();
  }, []);

  // Fonction pour ajouter un nouveau forfait via l’API
  const addForfait = async (newForfait) => {
    const res = await fetch("http://localhost:5000/forfaits", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newForfait),
    });

    const data = await res.json();
    setForfaits([...forfaits, data]); // Mise à jour de la liste avec le nouveau
    setShowAddForm(false); // Cacher le formulaire après l’ajout
  };

  // Fonction pour supprimer un forfait via l’API
  const deleteForfait = async (id) => {
    await fetch(`http://localhost:5000/forfaits/${id}`, {
      method: "DELETE",
    });
    setForfaits(forfaits.filter((f) => f.id !== id)); // Filtrer la liste
  };

  return (
    <div className="max-w-3xl mx-auto px-4">
      {/* Titre de la section */}
      <h2 className="text-2xl font-bold mb-6">Nos Forfaits</h2>

      {/* Bouton pour afficher ou masquer le formulaire d’ajout */}
      <button
        onClick={() => setShowAddForm(!showAddForm)}
        className={`mb-4 px-4 py-2 rounded ${
          showAddForm ? "bg-red-600" : "bg-green-600"
        } text-white`}
      >
        {showAddForm ? "Fermer le formulaire" : "Ajouter un forfait"}
      </button>

      {/* Affichage du formulaire si l’état showAddForm est vrai */}
      {showAddForm && <AddForfait onAdd={addForfait} />}

      {/* Liste des forfaits affichés sous forme de cartes */}
      <ul>
        {forfaits.map((f) => (
          <li key={f.id} className="mb-4 border p-4 rounded bg-blue-50">
            <h3 className="text-lg font-semibold">{f.nom}</h3>
            <p>{f.description}</p>
            <p className="text-sm">Catégorie: {f.categorie}</p>
            <p className="text-sm">Prix: {f.prix} $</p>

            {/* Boutons pour voir les détails ou supprimer le forfait */}
            <div className="mt-4 flex gap-4">
              <Link
                to={`/forfaits/${f.id}`}
                className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-800 transition"
              >
                Voir
              </Link>

              <button
                onClick={() => deleteForfait(f.id)}
                className="bg-red-600 text-white text-sm px-4 py-2 rounded hover:bg-red-800 transition"
              >
                Supprimer
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Exportation du composant Forfaits
export default Forfaits;
