import { Button } from "@/components/ui/button";
import IssueBoard from "../components/issue/issue-board";

export default function Home() {
  return (
    <div className="container mx-auto max-w-[1023px] p-4 flex justify-center flex-col items-center">
      <h1 className="text-3xl font-bold">Universal Issue Tracker</h1>
      <Button className="my-4 self-end">Add Issue</Button>
      <IssueBoard />
    </div>
  );
}
