import { Label } from "@satyam95/donutui";
import { Switch } from "@satyam95/donutui";

export function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="notifications" />
      <Label htmlFor="notifications">Enable Notifications</Label>
    </div>
  );
}
