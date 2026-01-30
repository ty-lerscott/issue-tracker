import mockIssues from './mock-issues';
import type { Issue } from '@/types/issue';

export const getIssues = async () => {
    // TODO: implement API fetch for issues
    return Promise.resolve({
        issues: mockIssues,
        count: mockIssues.length,
        open: mockIssues.filter(issue => issue.status === 'open').length,
        closed: mockIssues.filter(issue => issue.status === 'closed').length,
    });
}

export const getIssueBySlug = async (slug: string): Promise<Issue | undefined> => {
    return Promise.resolve(
        mockIssues.find(issue => issue.slug === slug)
    )
}
