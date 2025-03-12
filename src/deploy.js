
// Simple script to deploy to GitHub Pages

const fs = require('fs');
const { execSync } = require('child_process');

// Run build
console.log('Building project...');
execSync('npm run build', { stdio: 'inherit' });

// Create .nojekyll file to prevent Jekyll processing
fs.writeFileSync('./dist/.nojekyll', '');

console.log('Deployment build complete. Push your code to GitHub and ensure GitHub Pages is enabled in your repository settings.');
