# Inventory Hub (React)

## Run locally

1. Install [Node.js](https://nodejs.org/) if it is not already installed.
2. Open a terminal in this folder and run `npm install`.
3. Run `npm run dev` and open the local URL printed by Vite.

The app uses `localStorage` for accounts, products, suppliers, carts, and orders. Data stays in the browser where the app is running.

## Build for hosting

Run `npm run build`. Vite writes the production site to `dist/`.

The GitHub Pages workflow builds and deploys `dist/` from the `main` branch.
For this project site, the Vite build uses `/FinalProject/` as its asset base.
In the repository settings, set **Pages > Build and deployment > Source** to
**GitHub Actions**.
