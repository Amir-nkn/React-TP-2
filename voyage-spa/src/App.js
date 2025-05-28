// Importation des composants principaux de l'application
import Header from "./components/Header";
import Footer from "./components/Footer";
import Accueil from "./pages/Accueil";
import Forfaits from "./pages/Forfaits";
import Apropos from "./pages/Apropos";
import ForfaitDetail from "./pages/ForfaitDetail";

// Importation des composants de routage de React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Composant principal de l’application
function App() {
  return (
    // Définition du routeur principal
    <BrowserRouter>
      {/* Conteneur principal avec disposition en colonne et hauteur minimum écran */}
      <div className="min-h-screen flex flex-col">
        {/* En-tête de la page */}
        <Header />

        {/* Zone principale de contenu */}
        <main className="flex-grow p-4">
          <Routes>
            {/* Route vers la page d’accueil */}
            <Route path="/" element={<Accueil />} />

            {/* Route vers la liste des forfaits */}
            <Route path="/forfaits" element={<Forfaits />} />

            {/* Route vers le détail d’un forfait spécifique */}
            <Route path="/forfaits/:id" element={<ForfaitDetail />} />

            {/* Route vers la page À propos */}
            <Route path="/apropos" element={<Apropos />} />
          </Routes>
        </main>

        {/* Pied de page */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

// Exportation du composant App
export default App;
