# JLABS Litepaper

A modern, interactive litepaper designed for optimal reading experience and performance.

## Setup & Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start local development server:**
   ```bash
   npm run dev
   ```

## Deployment

This project is built as a static site. To deploy to production:

1. **Build the project:**
   ```bash
   npm run build
   ```
   This command compiles the application into the `dist` directory.

2. **Deploy the `dist` folder:**
   You can deploy the contents of the `dist` folder to any static hosting provider.

   **Popular Options:**
   - **Vercel:** Connect your GitHub repository and it will auto-detect the settings (Framework: Vite).
   - **Netlify:** Drag and drop the `dist` folder or connect via Git.
   - **GitHub Pages:** Configure to serve from the `gh-pages` branch (requires pushing the build artifact) or use a GitHub Action to build and deploy.
