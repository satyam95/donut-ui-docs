import { RadioGroup, RadioGroupItem } from "@satyam95/donutui";
import { Label } from "@satyam95/donutui";

export function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="system">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="light" id="r1" />
        <Label htmlFor="r1">Light Mode</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="dark" id="r2" />
        <Label htmlFor="r2">Dark Mode</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="system" id="r3" />
        <Label htmlFor="r3">System Default</Label>
      </div>
    </RadioGroup>
  );
}
