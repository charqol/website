export interface OurValuesItem {
    id: number;
    title: string;
    description: string;
    icon: string;
    iconAlt: string;
}


export const ourValues: OurValuesItem[] = [
    {
        id: 1,
        title: "Innovation",
        description: "Blending the latest trends and tech with best practices and timeless design principles.",
        icon: "/images/why-choose-us/innovation-50.png",
        iconAlt: "Innovations & Cutting Edge"
    },
    {
        id: 2,
        title: "Transparency",
        description: "Clear communication and complete visibility at every stage of the development process.",
        icon: "/images/why-choose-us/transparency-50.png",
        iconAlt: "Transparency"
    },
    {
        id: 3,
        title: "Trust",
        description: "Highest standards of integrity and ethical condust. Deeply committed to protecting our clients' IP and business interests.",
        icon: "/images/why-choose-us/trust-48.png",
        iconAlt: "Integrity"
    },
    {
        id: 4,
        title: "Quality First",
        description: "We believe in delivering the best quality products and services to our clients.",
        icon: "/images/why-choose-us/quality-50.png",
        iconAlt: "Quality"
    }
];
