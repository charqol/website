import path from "path";
import fs from "fs";
import { PUBLIC_BASE_URL } from '$env/static/public';

export const GET = async () => {

    const isDevelopment = import.meta.env.VITE_ENVIRONMENT === 'development';

    if (isDevelopment) {
        return new Response('Sitemap is not available in development mode', {
            status: 404
        });
    }

    const blogPath = path.join(process.cwd(), `static/content/blogs`);

    // Get all the folders in the blogs directory
    const folders = fs.readdirSync(blogPath).filter((file: string) =>
        fs.statSync(path.join(blogPath, file)).isDirectory()
    );

    const blogPosts = folders.map((folder: string) => {
        return {
            slug: folder
        };
    });

    const baseUrl = PUBLIC_BASE_URL;
    const staticUrls = [
        '',
        '/about',
        '/accelerators',
        '/blogs',
        '/technologies',
        '/industries',
        '/industries/healthcare',
        '/industries/agriculture',
        '/industries/education',
        '/industries/finance',
        '/industries/enterprise',
        '/industries/manufacturing',
        '/industries/ecommerce',
        '/industries/realestate',
        '/product-engineering',
        '/services',
        '/services/microservices',
        '/services/ai',
        '/services/cloud-ops',
        '/services/apps',
        '/services/embedded',
        '/services/data-ops',
        '/services/algorithms',
        '/services/bespoke',
        '/contact'
    ];

    const urls = [
        ...staticUrls.map((path) => `<url><loc>${baseUrl}${path}</loc></url>`),
        ...blogPosts.map((post) => `<url><loc>${baseUrl}/blog/${post.slug}</loc></url>`)
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.join('\n')}
  </urlset>`;

    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml'
        }
    });
};
