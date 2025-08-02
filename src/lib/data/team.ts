import type { TeamMember } from '$lib/types/team';

// TODO: Replace with actual team member data and image paths
export const teamMembers: TeamMember[] = [
    {
        id: 'member-1',
        name: "Alice Johnson",
        position: "Lead Developer",
        image: "/images/team/member-1.jpg", // Placeholder image
        bio: "Passionate about creating scalable backend systems and mentoring junior developers.",
        socials: {
            linkedin: "#",
            github: "#"
        }
    },
    {
        id: 'member-2',
        name: "Bob Williams",
        position: "Frontend Engineer",
        image: "/images/team/member-2.jpg", // Placeholder image
        bio: "Crafting intuitive user interfaces with modern web technologies like Svelte and React.",
        socials: {
            linkedin: "#",
            twitter: "#"
        }
    },
    {
        id: 'member-3',
        name: "Charlie Brown",
        position: "AI/ML Specialist",
        image: "/images/team/member-3.jpg", // Placeholder image
        bio: "Developing intelligent solutions and pushing the boundaries of machine learning applications.",
        socials: {
            linkedin: "#",
            github: "#"
        }
    },
    {
        id: 'member-4',
        name: "Diana Miller",
        position: "Cloud Architect",
        image: "/images/team/member-4.jpg", // Placeholder image
        bio: "Designing robust and cost-effective cloud infrastructure on AWS, Azure, and GCP.",
        socials: {
            linkedin: "#"
        }
    }
];
