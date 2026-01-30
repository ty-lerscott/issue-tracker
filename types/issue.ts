export type Issue = {
    id: number;
    author: string;
    title: string;
    status: 'open' | 'closed';
    tags: string[];
    timestamp: string;
    slug: string;
    content: string;
}