export interface TeamMember {
    id: string; // Unique identifier
    name: string;
    position: string;
    image: string; // Path to member's photo
    bio: string; // Short biography
    socials?: {
        linkedin?: string;
        twitter?: string;
        github?: string;
    }; // Optional social links
}
