import Link from 'next/link';
import type { VariantProps } from 'class-variance-authority';

import dayjs from '@/lib/dayjs'; 
import type {Issue} from "@/types/issue";
import { kebabToTitleCase } from "@/lib/utils";
import { Badge, badgeVariants } from '@/components/ui/badge';


const Issue = ({issue}: {issue: Issue}) => {
    return (
        <div key={issue.id} className="py-2 px-4 border-b border-border last:border-0">
            <div className="grid">
                <Link href={`/issue/${issue.slug}`}>
                    <h2 className="font-bold leading-5">{issue.title}</h2>
                </Link>
                {issue.tags.length > 0 ? (
                    <div className="flex gap-2 my-2">
                        {issue.tags.map((tag) => (
                            <Badge
                                key={tag}
                                variant={tag as VariantProps<typeof badgeVariants>['variant']}>
                                {kebabToTitleCase(tag)}
                            </Badge>
                        ))}
                    </div>
                ) : null}
            </div>
            <p className="text-xs">{`#${issue.id} · opened ${dayjs(issue.timestamp).fromNow()}`}</p>
        </div>
    )
}

export default Issue;