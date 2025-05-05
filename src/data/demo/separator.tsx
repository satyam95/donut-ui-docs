import { Separator } from "@satyam95/donutui";

export function SeparatorDemo() {
  return (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">DonutUI Components</h4>
        <p className="text-sm text-muted-foreground">
          A modern, open-source UI component library for building dynamic
          interfaces.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Home</div>
        <Separator orientation="vertical" />
        <div>About</div>
        <Separator orientation="vertical" />
        <div>Contact</div>
        <Separator orientation="vertical" />
        <div>GitHub</div>
      </div>
    </div>
  );
}
