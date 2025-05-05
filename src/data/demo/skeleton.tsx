import { Skeleton } from "@satyam95/donutui";

export function SkeletonDemo() {
  return (
    <div className="flex flex-col items-center space-y-4 p-4 border rounded-lg shadow-md w-[200px]">
      <Skeleton className="h-[100px] w-full rounded-md" />
      <div className="space-y-2 w-full">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
      <div className="flex space-x-2 w-full">
        <Skeleton className="h-8 w-1/2 rounded-md" />
        <Skeleton className="h-8 w-1/2 rounded-md" />
      </div>
    </div>
  );
}
