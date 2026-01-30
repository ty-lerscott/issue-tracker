import snarkdown from 'snarkdown';

import dayjs from '@/lib/dayjs'; 
import { Badge } from "@/components/ui/badge";
import { getIssueBySlug } from "@/lib/api/issues";
import { Separator } from "@/components/ui/separator";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default async function Issue({params}: {
  params: {
    slug: string
  }
}) {
  const {slug} = await params;
  const issue = await getIssueBySlug(slug);

  if (!issue) {
    return null;
  }

  const postHTML = snarkdown(issue.content);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">
        {issue.title}
        <span className="ml-2 text-[var(--color-foreground-muted)]">#{issue.id}</span>
      </h1>
      <div className="mt-2">
        <Badge size="base" variant="success">
          Open
        </Badge>
      </div>
      <Separator className="my-4" />

      <div>
        <div data-testid="Post">
          <div className="flex gap-4">
            <Avatar size="lg">
              <AvatarImage
                src={`/${issue.author}/profile-picture.png`}
                alt="Author Profile Picture"
              />
              <AvatarFallback>{issue.author.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
            <Card>
              <CardHeader className="flex justify-between">
                <div className="flex gap-1">
                  <span className="font-bold">{issue.author}</span>
                  <span className="text-[var(--color-foreground-muted)]">opened {dayjs(issue.timestamp).fromNow()}</span>
                </div>
                <Badge variant="ghost-info">Owner</Badge>
              </CardHeader>
              <CardContent>
                {issue.content ? (
                  <div dangerouslySetInnerHTML={{
                    __html: postHTML
                  }} />
                ) : (
                  <p className="text-[var(--color-foreground-muted)] italic">
                    No description provided.
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* TODO: Comments go here */}
      </div>
    </div>
  );
}
