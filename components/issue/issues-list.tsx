
import Issue from './issue';
import dayjs from '@/lib/dayjs';
import type { Issue as IssueType } from '@/types/issue';

const IssuesList = ({issues, isOpen}: {
    issues: IssueType[];
    isOpen: boolean;
}) => {
    const newIssues = issues
        .filter(issue => isOpen ? issue.status === 'open' : issue.status === 'closed')
        .toSorted((a, b) => dayjs(b.timestamp).diff(dayjs(a.timestamp)));

    return (
        <>
            {newIssues.map(issue => (
                <Issue key={issue.id} issue={issue} / >
            ))}
        </>
    );
}

export default IssuesList;