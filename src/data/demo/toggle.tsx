import { Bold } from "lucide-react";
import { Toggle } from "donut-ui";

export function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle italic">
      <Bold className="h-4 w-4" />
    </Toggle>
  );
}
