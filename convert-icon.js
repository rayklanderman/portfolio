const sharp = require('sharp');
const fs = require('fs');

// Read the SVG file
const svgBuffer = fs.readFileSync('./public/apple-touch-icon.svg');

// Convert SVG to PNG
sharp(svgBuffer)
  .resize(180, 180)
  .png()
  .toFile('./public/apple-touch-icon.png')
  .then(() => {
    console.log('Successfully created apple-touch-icon.png');
  })
  .catch(err => {
    console.error('Error creating PNG:', err);
  });
