import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const images = [
    {
        name: 'erp.jpg',
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
        alt: 'Business dashboard interface'
    },
    {
        name: 'chatbot.jpg',
        url: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80',
        alt: 'AI chatbot interface'
    },
    {
        name: 'workflow.jpg',
        url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
        alt: 'Workflow diagram on whiteboard'
    },
    {
        name: 'battery.jpg',
        url: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
        alt: 'Modern battery testing equipment'
    },
    {
        name: 'iam.jpg',
        url: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
        alt: 'Security interface with biometric authentication'
    },
    {
        name: 'biometric.jpg',
        url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
        alt: 'Medical signal processing display'
    },
    {
        name: 'face-recognition.jpg',
        url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80',
        alt: 'Face recognition grid pattern'
    },
    {
        name: 'elearning.jpg',
        url: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80',
        alt: 'Modern e-learning platform interface'
    }
];

const downloadImage = (url, filepath) => {
    return new Promise((resolve, reject) => {
        https.get(url, (response) => {
            if (response.statusCode === 200) {
                response.pipe(fs.createWriteStream(filepath))
                    .on('error', reject)
                    .once('close', () => resolve(filepath));
            } else {
                response.resume();
                reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
            }
        }).on('error', reject);
    });
};

async function downloadAll() {
    const outputDir = path.join(dirname(__dirname), 'static', 'images', 'case-studies');

    for (const image of images) {
        const filepath = path.join(outputDir, image.name);
        console.log(`Downloading ${image.name}...`);
        try {
            await downloadImage(image.url, filepath);
            console.log(`Successfully downloaded ${image.name}`);
        } catch (error) {
            console.error(`Error downloading ${image.name}:`, error.message);
        }
    }
}

downloadAll().catch(console.error);
