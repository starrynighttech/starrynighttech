#!/bin/bash

# Project folder
PROJECT="ultratechhub"

echo "Creating project folder: $PROJECT"
mkdir -p $PROJECT/src
mkdir -p $PROJECT/public/assets

# ===== 1. index.html =====
cat > $PROJECT/index.html <<EOL
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Ultratech Hub</title>
  <link rel="stylesheet" href="/src/style.css">
</head>
<body>
  <!-- Background video -->
  <video autoplay muted loop id="background-video">
    <source src="/public/assets/Smoke.mp4" type="video/mp4">
  </video>

  <!-- Logo -->
  <img src="/public/assets/logo.png" alt="Ultratech Hub Logo" id="logo">

  <div id="app"></div>

  <script type="module" src="/src/main.js"></script>
</body>
</html>
EOL

# ===== 2. src/main.js =====
cat > $PROJECT/src/main.js <<EOL
const app = document.getElementById('app');
app.innerHTML = \`<h1>Welcome to Ultratech Hub</h1>\`;
console.log("Ultratech Hub effects loaded");
EOL

# ===== 3. src/style.css =====
cat > $PROJECT/src/style.css <<EOL
#background-video {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -1;
  object-fit: cover;
}

#logo {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 150px;
  height: auto;
}

#app {
  position: relative;
  z-index: 1;
  color: white;
  font-family: sans-serif;
  text-align: center;
  margin-top: 50px;
}
EOL

# ===== 4. vite.config.js =====
cat > $PROJECT/vite.config.js <<EOL
import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
EOL

# ===== 5. package.json =====
cat > $PROJECT/package.json <<EOL
{
  "name": "ultratechhub",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "devDependencies": {
    "vite": "^5.4.21"
  }
}
EOL

# ===== 6. netlify.toml =====
cat > $PROJECT/netlify.toml <<EOL
[build]
  publish = "dist"
  command = "npm run build"

[build.environment]
  PAYNOW_INTEGRATION_ID = ""
  PAYNOW_INTEGRATION_KEY = ""
  PAYNOW_RESULT_URL = ""
  PAYNOW_RETURN_URL = ""
EOL

# ===== 7. Placeholders for assets =====
touch $PROJECT/public/assets/Smoke.mp4
touch $PROJECT/public/assets/logo.png

echo "✅ Project setup complete!"
echo "Place your actual Smoke.mp4 and logo.png into $PROJECT/public/assets/"
echo "Next steps:"
echo "1. cd $PROJECT"
echo "2. npm install"
echo "3. npm run dev  # for local testing"
echo "4. npm run build  # for Netlify deployment"