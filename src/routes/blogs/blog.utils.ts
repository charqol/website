import { error } from "@sveltejs/kit";
import fs from 'fs';
import path from 'path';
import type { Author, BlogPost } from '$lib/types/blog';
import { authors } from "$lib/data/blogs/authors";

///////////////////////////////////////////////////////////////////////

export function getAllblogsMetadata(): BlogPost[] {

    const mainBlogsFolderPath = path.join(process.cwd(), `static/content/blogs`);
    const folders = fs.readdirSync(mainBlogsFolderPath).filter(
        (file: string) => fs.statSync(path.join(mainBlogsFolderPath, file)).isDirectory()
    );

    const blogsMetadata = folders.map((blogFolder: string) => {
        // Read the markdown content
        const fullBlogPath = path.join(mainBlogsFolderPath, blogFolder, 'blog.md');
        if (!fs.existsSync(fullBlogPath)) {
            throw error(404, `Blog post not found: ${blogFolder}`);
        }

        const slug = blogFolder;

        const metadataPath = path.join(mainBlogsFolderPath, blogFolder, "metadata.json");
        const metadataFileContent = fs.readFileSync(metadataPath, 'utf-8');
        const metadata = JSON.parse(metadataFileContent);
        const postMetadata: BlogPost = {
            ...metadata,
            slug: slug
        };

        // Add author details to the metadata
        if (postMetadata.authorNames && postMetadata.authorNames.length > 0) {
            const authorDetails = authors.filter((author: Author) =>
                postMetadata.authorNames?.includes(author.name)
            );
            postMetadata.authors = authorDetails;
        }

        return postMetadata;
    });
    return blogsMetadata;
}

///////////////////////////////////////////////////////////////////////

// import type { BlogMetadata, Author } from "$lib/types/blog";
// import { authors } from "$lib/data/blogs/authors";

// export function extractMetadata(slug: string, metadataText: string): BlogMetadata {
//     const metadata: BlogMetadata = {
//         title: '',
//         date: new Date().toISOString(),
//         image: '',
//         slug: slug,
//         imageAlt: '',
//         description: '',
//         tags: [],
//         category: '',
//         authors: [],
//         readTimeMinutes: 0
//     };

//     const lines = metadataText.split("\n");
//     const titleLine = lines.find(line => line.startsWith('title:'));
//     if (titleLine) {
//         const titleMatch = titleLine.match(/title:\s*(.*)/);
//         if (titleMatch) {
//             metadata.title = titleMatch[1].replace(/"/g, '').replace(/'/g, '');
//         }
//     }

//     const dateLine = lines.find(line => line.startsWith('date:'));
//     if (dateLine) {
//         const dateMatch = dateLine.match(/date:\s*(.*)/);
//         if (dateMatch) {
//             var dt = new Date(dateMatch[1].replace(/"/g, '').replace(/'/g, ''));
//             if (isNaN(dt.getTime())) {
//                 throw new Error('Invalid date format');
//             }
//             metadata.date = dt.toISOString();
//         }
//     }

//     const tagsLine = lines.find(line => line.startsWith('tags:'));
//     if (tagsLine) {
//         const tagsMatch = tagsLine.match(/tags:\s*(.*)/);
//         if (tagsMatch) {
//             metadata.tags = tagsMatch[1]
//                 .replace(/^\[|\]$/g, '')
//                 .split(',')
//                 .map(tag => tag.trim().replace(/"/g, '').replace(/'/g, ''));
//         }
//     }

//     const categoryLine = lines.find(line => line.startsWith('category:'));
//     if (categoryLine) {
//         const categoryMatch = categoryLine.match(/category:\s*(.*)/);
//         if (categoryMatch) {
//             metadata.category = categoryMatch[1].replace(/"/g, '').replace(/'/g, '');
//         }
//     }

//     const authorsLine = lines.find(line => line.startsWith('authors:'));
//     if (authorsLine) {
//         const authorsMatch = authorsLine.match(/authors:\s*(.*)/);
//         if (authorsMatch) {
//             var authorNames = authorsMatch[1]
//                 .replace(/^\[|\]$/g, '')
//                 .split(',')
//                 .map(author => author.trim().replace(/"/g, '').replace(/'/g, ''));
//             metadata.authors = authors.filter(author => authorNames.includes(author.name));
//         }
//     }

//     const imageLine = lines.find(line => line.startsWith('image:'));
//     if (imageLine) {
//         const imageMatch = imageLine.match(/image:\s*(.*)/);
//         if (imageMatch) {
//             metadata.image = imageMatch[1].replace(/"/g, '').replace(/'/g, '');
//         }
//     }

//     const descriptionLine = lines.find(line => line.startsWith('description:'));
//     if (descriptionLine) {
//         const descriptionMatch = descriptionLine.match(/description:\s*(.*)/);
//         if (descriptionMatch) {
//             metadata.description = descriptionMatch[1].replace(/"/g, '').replace(/'/g, '');
//         }
//     }

//     const imageAltLine = lines.find(line => line.startsWith('imageAlt:'));
//     if (imageAltLine) {
//         const imageAltMatch = imageAltLine.match(/imageAlt:\s*(.*)/);
//         if (imageAltMatch) {
//             metadata.imageAlt = imageAltMatch[1].replace(/"/g, '').replace(/'/g, '');
//         }
//         else {
//             metadata.imageAlt = metadata.title;
//         }
//     }

//     const readTimeLine = lines.find(line => line.startsWith('readTimeMinutes:'));
//     if (readTimeLine) {
//         const readTimeMatch = readTimeLine.match(/readTimeMinutes:\s*(.*)/);
//         if (readTimeMatch) {
//             metadata.readTimeMinutes = parseInt(readTimeMatch[1]);
//         }
//     }

//     return metadata;
// }
