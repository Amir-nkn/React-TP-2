# 🌍 Agence de Voyages - SPA React.js

Ce projet a été réalisé dans le cadre du cours **Techniques avancées en programmation Web (582-41F-MA)** au **Collège de Maisonneuve**, sous la supervision de M. Marcos Sanches.
L'objectif est de créer un site monopage (SPA) fonctionnel à l'aide de **React.js**, permettant de gérer des forfaits touristiques.

---

## 🔧 Fonctionnalités

- ✅ Ajouter un nouveau forfait
- ✅ Supprimer un forfait existant
- ✅ Afficher les détails d’un forfait
- ✅ Navigation entre les pages avec **React Router**
- ✅ Gestion des données avec **JSON Server**
- ✅ Stylisation avec **Tailwind CSS**
- ✅ SPA sans rechargement de page (fetch + useEffect)

---

## 🧱 Structure du projet

```
voyage-spa/
│
├── public/
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   └── AddForfait.js
│   ├── pages/
│   │   ├── Accueil.js
│   │   ├── Apropos.js
│   │   ├── Forfaits.js
│   │   └── ForfaitDetail.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── db.json
├── tailwind.config.js
└── postcss.config.js
```

---

## ⚙️ Commandes utilisées

Voici toutes les commandes que j'ai utilisées:

### ✅ Création du projet

```bash
npx create-react-app voyage-spa
cd voyage-spa
```

### ✅ Installation de Tailwind CSS (méthode du prof)

```bash
npm install tailwindcss@3
npx tailwindcss init -p
```

### ✅ Configuration de Tailwind dans `index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### ✅ Installation du JSON Server

```bash
npm install -g json-server
```

Et ensuite pour exécuter :

```bash
json-server --watch db.json --port 5000
```

---

## 🌐 Routes disponibles

- `/` → Accueil
- `/forfaits` → Liste des forfaits + formulaire d’ajout
- `/forfaits/:id` → Détails d’un forfait
- `/apropos` → Présentation de l’agence

---

## 🧪 Tests effectués

- Ajout d’un forfait avec validation des champs
- Suppression d’un forfait (mise à jour instantanée)
- Détail d’un forfait (utilisation de `useParams`)
- Persistance via JSON Server

---

## 💻 Lien GitHub

👉 [Lien vers le dépôt GitHub](https://github.com/Amir-nkn/React-TP-2)

---

## 📦 Technologies utilisées

- React.js
- React Router DOM
- Tailwind CSS
- JSON Server
- JavaScript ES6+

---

## 🧑 Réalisé par

**\[Amirhossein Niakan]**
Étudiant en AEC — Conception et programmation de sites Web
Collège de Maisonneuve

```

```
