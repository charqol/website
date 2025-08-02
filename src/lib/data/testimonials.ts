
export interface Testimonial {
    name: string;
    title: string;
    company: string;
    testimonial: string;
    image: string;
    linkedInLink?: string;
    website?: string;
}

export const testimonials: Testimonial[] = [
    {
        name: 'Sri Vasireddy',
        title: 'CEO',
        company: 'REAN Foundation',
        testimonial: 'Inflection Zone has been a great partner for us. Their engagement, understanding, execution and delivery has been phenomenal. They have delivered many critical components of our infrastructure. Their team has become an extension of our team and we are proud to have them as our reliable partner.',
        image: '/images/testimonials/rean-foundation.png',
        linkedInLink: 'https://www.linkedin.com/in/srivasireddy',
        website: 'https://www.reanfoundation.org/'
    },
    {
        name: 'Vijay Muktamath',
        title: 'CEO',
        company: 'Sensesemi Technologies',
        testimonial: 'Their ability to take ownership and deliver value has truly impressed us. Working with this team has been a game-changer—they’ve shouldered the majority of our software projects execution and delivered outstanding results with speed, precision, and professionalism.',
        image: '/images/testimonials/sensesemi.png',
        linkedInLink: 'https://in.linkedin.com/in/vijay-muktamath',
        website: 'https://www.sensesemi.com/'
    },
    // {
    //     name: 'Sitaram Prasad',
    //     title: 'CEO',
    //     company: 'TikMe Technologies',
    //     testimonial: 'What sets them apart is their proactive mindset, attention to detail, and commitment to our success. They feel more like an extension of our internal team than an external vendor.',
    //     image: '/images/testimonials/tikme.png',
    //     linkedInLink: 'https://www.linkedin.com/in/sitaram-prasad/',
    //     website: 'https://www.tikme.co/'
    // }
];
