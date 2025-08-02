import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create directory if it doesn't exist
const dir = path.join(__dirname, 'static', 'images', 'industries');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// Image URLs from Unsplash (free to use)
const images = [
  {
    url: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop',
    filename: 'finance-hero.jpg',
    description: 'Finance hero image showing modern banking concept'
  },
  {
    url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop',
    filename: 'finance-digital-banking.jpg',
    description: 'Digital banking solutions image'
  },
  {
    url: 'https://images.unsplash.com/photo-1556742044-3c31d79f2c7d?q=80&w=1200&auto=format&fit=crop',
    filename: 'finance-payment-processing.jpg',
    description: 'Payment processing systems image'
  },
  {
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    filename: 'finance-analytics.jpg',
    description: 'Financial analytics and reporting image'
  },
  {
    url: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200&auto=format&fit=crop',
    filename: 'finance-blockchain.jpg',
    description: 'Blockchain and cryptocurrency image'
  },
  {
    url: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=1200&auto=format&fit=crop',
    filename: 'finance-case-study-1.jpg',
    description: 'Digital banking transformation case study image'
  },
  {
    url: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop',
    filename: 'finance-case-study-2.jpg',
    description: 'Payment processing system case study image'
  }
];

// Download each image
images.forEach(image => {
  const filePath = path.join(dir, image.filename);

  https.get(image.url, (response) => {
    const fileStream = fs.createWriteStream(filePath);
    response.pipe(fileStream);

    fileStream.on('finish', () => {
      fileStream.close();
      console.log(`Downloaded: ${image.filename} - ${image.description}`);
    });
  }).on('error', (err) => {
    console.error(`Error downloading ${image.filename}: ${err.message}`);
  });
});

console.log('Downloading images from Unsplash...');
