// Importation du hook useState pour gérer l’état local
import { useState } from "react";

// Composant AddForfait qui reçoit la fonction onAdd comme propriété
const AddForfait = ({ onAdd }) => {
  // États pour les champs du formulaire
  const [nom, setNom] = useState("");
  const [description, setDescription] = useState("");
  const [prix, setPrix] = useState("");
  const [categorie, setCategorie] = useState("");

  // Fonction appelée lors de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    // Validation : tous les champs doivent être remplis
    if (!nom || !description || !prix || !categorie) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    // Création de l’objet forfait à ajouter
    const newForfait = {
      nom,
      description,
      prix: parseFloat(prix),
      categorie,
    };

    onAdd(newForfait); // Appel de la fonction parente pour ajouter le forfait

    // Réinitialisation des champs du formulaire
    setNom("");
    setDescription("");
    setPrix("");
    setCategorie("");
  };

  return (
    // Formulaire avec mise en forme et gestion de la soumission
    <form
      onSubmit={handleSubmit}
      className="mb-6 p-4 border rounded bg-gray-100 shadow"
    >
      {/* Titre du formulaire */}
      <h3 className="text-lg font-semibold mb-4 text-blue-800">
        Ajouter un nouveau forfait
      </h3>

      {/* Champs du formulaire organisés verticalement */}
      <div className="grid grid-cols-1 gap-3">
        <input
          type="text"
          placeholder="Nom du forfait"
          className="p-2 border rounded"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />

        <input
          type="text"
          placeholder="Description"
          className="p-2 border rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="number"
          placeholder="Prix"
          className="p-2 border rounded"
          value={prix}
          onChange={(e) => setPrix(e.target.value)}
        />

        <input
          type="text"
          placeholder="Catégorie"
          className="p-2 border rounded"
          value={categorie}
          onChange={(e) => setCategorie(e.target.value)}
        />

        {/* Bouton de soumission */}
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800"
        >
          Ajouter
        </button>
      </div>
    </form>
  );
};

// Exportation du composant
export default AddForfait;
