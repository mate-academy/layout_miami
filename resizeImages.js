const sharp = require('sharp');
const fs = require('fs-extra');
const path = require('path');

const imageDirectory = './src/images/photos';
const outputImageDirectory = './src/assets';

fs.removeSync(outputImageDirectory);
fs.mkdirSync(outputImageDirectory, { recursive: true });

fs.readdirSync(imageDirectory).forEach(file => {
  const imagePath = path.join(imageDirectory, file);
  const fileExtension = path.extname(file);
  let baseName;

  if (fileExtension === '.jpg' || fileExtension === '.png') {
    if (fileExtension === '.jpg') {
      baseName = path.basename(file, '.jpg');
    } else if (fileExtension === '.png') {
      baseName = path.basename(file, '.png');
    }
    const variations = [
      { format: 'jpeg', quality: 80 },
      { format: 'webp', quality: 80 },
      { format: 'png', quality: 80 }
    ];
    const sizes = [320, 576, 768, 992, 1200];
    variations.forEach(variation => {
      if (variation.format === 'jpeg' || fileExtension === '.jpg') {
        sharp(imagePath)
          .toFormat(variation.format, { quality: variation.quality })
          .toFile(path.join(outputImageDirectory, `${baseName}.${variation.format}`));

        sizes.forEach(size => {
          sharp(imagePath)
            .resize(size)
            .toFormat(variation.format, { quality: variation.quality })
            .toFile(path.join(outputImageDirectory, `${baseName}-${size}w.${variation.format}`));
        });
      }

      if (variation.format === 'webp' || fileExtension === '.png') {
        sharp(imagePath)
          .toFormat(variation.format)
          .toFile(path.join(outputImageDirectory, `${baseName}.${variation.format}`));

        sizes.forEach(size => {
          sharp(imagePath)
            .resize(size)
            .toFormat(variation.format)
            .toFile(path.join(outputImageDirectory, `${baseName}-${size}w.${variation.format}`));
        });
      }
    });
  }
});

