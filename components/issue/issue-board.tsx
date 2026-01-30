

import { getIssues } from '@/lib/api/issues';
import IssueBoardClient from './issue-board-client';

const IssueBoard = async () => {
    const issuesData = await getIssues();
    
    return (
        <div className="w-full">
            <IssueBoardClient
                issues={issuesData.issues}
                openCount={issuesData.open}
                closedCount={issuesData.closed}
            />
        </div>
    )
}

export default IssueBoard;