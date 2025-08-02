export interface Accelerator {
    id: string;
    title: string;
    description: string;
    image: string; // Path to a representative image
    features: string[]; // Key features derived from description
}
