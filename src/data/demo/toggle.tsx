import { Bold } from "lucide-react";
import { Toggle } from "@satyam95/donutui";

export function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle italic">
      <Bold className="h-4 w-4" />
    </Toggle>
  );
}
