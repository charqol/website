export const GET = async () => {
    const isDev = import.meta.env.VITE_ENVIRONMENT === 'development';

    const body = isDev
        ? `User-agent: *\nDisallow: /`
        : `User-agent: *\nAllow: /`;

    return new Response(body, {
        headers: {
            'Content-Type': 'text/plain'
        }
    });
};
