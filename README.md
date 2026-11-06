# MyStyle Linktree — Bio Links & Studio Sur-Mesure Hub

Un site Link-in-Bio moderne et luxueux, conçu sur-mesure pour **MyStyle Algérie**. Il centralise tous les canaux digitaux, l'accès direct au Studio de confection sur-mesure, à la boutique prêt-à-porter, aux réseaux sociaux, et à la prise de contact WhatsApp avec nos maîtres tailleurs.

---

## 🌟 Fonctionnalités

1. **🎨 3 Thèmes de Haute Couture :**
   - **Obsidian Noir :** Esthétique sombre luxueuse avec bordures dorées et reflets brillants.
   - **Casbah Ivoire :** Tons chauds inspirés de la Casbah d’Alger et de la terracotta saharienne.
   - **Émeraude Royale :** Vert émeraude traditionnel rehaussé de touches d’or majboud.

2. **🌍 Multilingue avec Support RTL Intégral :**
   - Français (FR)
   - العربية (AR) avec inversion automatique de la direction (`dir="rtl"`) et typographie arabe.
   - English (EN)

3. **🔗 Cartes de Liens Interactives :**
   - **Effet Shimmer animé** sur les liens phares (Studio Sur-Mesure et Boutique).
   - Badges dynamiques (`EXCLUSIVITÉ`, `LIVRAISON 48H`, `EN LIGNE`).
   - Filtrage par catégorie : *Tous les liens*, *Sur-mesure & Boutique*, *Services & Ateliers*.

4. **📱 QR Code & Partage Réseaux :**
   - **Générateur QR Code intégré :** Pour affichage rapide lors de salons, foires nuptiales ou en boutique physique.
   - **Modal de partage :** Envoi direct vers WhatsApp, Telegram, ou copie du lien avec notification toast.

5. **💌 Inscription VIP Cercle Privé :**
   - Formulaire de capture email pour délivrer un code de réduction de 10% sur la première confection.

---

## 🚀 Démarrage Rapide

### 1. Lancer le serveur de développement (Port 5174)
```bash
cd linktree
npm run dev
```
Accédez ensuite à [http://localhost:5174](http://localhost:5174).

### 2. Compiler pour la production
```bash
npm run build
```
Les fichiers statiques optimisés seront générés dans le dossier `dist/`.

---

## 📂 Architecture du Projet

```text
linktree/
├── index.html              # Point d'entrée HTML avec typographies Playfair & Cairo
├── package.json            # Dépendances et scripts Vite
├── tailwind.config.js      # Palette dorée, émeraude et polices
├── postcss.config.js       # Configuration PostCSS
├── vite.config.ts          # Configuration du serveur Vite
├── tsconfig.json           # Configuration TypeScript
├── src/
│   ├── main.tsx            # Point d'entrée React
│   ├── App.tsx             # Composant principal avec gestion d'état (thèmes, langues, onglets)
│   ├── types.ts            # Définitions TypeScript
│   ├── index.css           # Styles Tailwind et animations glassmorphism / shimmer
│   ├── data/
│   │   └── links.ts        # Données des liens officiels et profils
│   └── components/
│       ├── LinkCard.tsx    # Carte de lien interactive avec badges et icônes
│       ├── ThemeToggle.tsx # Sélecteur de thème
│       ├── LangToggle.tsx  # Sélecteur de langue (FR / AR / EN)
│       ├── QRCodeModal.tsx # Fenêtre modale de scan QR Code
│       ├── ShareModal.tsx  # Fenêtre modale de partage social
│       └── ContactCard.tsx # Carte d'inscription Cercle Privé VIP
```

