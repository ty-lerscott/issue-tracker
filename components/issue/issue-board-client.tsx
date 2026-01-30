'use client';
import { useState, type ReactNode } from 'react';

import { cn } from '@/lib/utils';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import IssuesList from './issues-list';
import type { Issue } from '@/types/issue';

const HeaderButton = ({children, onClick}: {
    children: ReactNode;
    onClick(): void;
}) => {
    return <Button onClick={onClick} variant="ghost" className="text-foreground-muted">{children}</Button>
}

const IssueBoardClient = ({openCount, closedCount, issues}: {
    issues: Issue[];
    openCount: number;
    closedCount: number;
}) => {
    const [isOpen, setIsOpen] = useState(true);

    const setIsClosed = () => setIsOpen(false);
    const setIsOpened = () => setIsOpen(true);

    return (
        <>
            <div className="border-border border-1 rounded-t-sm">
                <HeaderButton onClick={setIsOpened}>
                    <span className={cn("text-[var(--color-foreground-muted)]", isOpen ? 'text-bold' : '')}>Open</span>
                    <Badge className="ml-1">{openCount}</Badge>
                </HeaderButton>
                <HeaderButton onClick={setIsClosed}>
                    <span className={cn("text-[var(--color-foreground-muted)]", isOpen ? '' : 'text-bold')}>Closed</span>
                    <Badge className="ml-1">{closedCount}</Badge>
                </HeaderButton>
            </div>

            <div className="border-x-border border-x-1 border-border border-b-1">
                <IssuesList issues={issues} isOpen={isOpen} />
            </div>
        </>
    )
};

export default IssueBoardClient;