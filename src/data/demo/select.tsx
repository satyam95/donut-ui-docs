import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@satyam95/donutui";

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a country" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Countries</SelectLabel>
          <SelectItem value="usa">United States</SelectItem>
          <SelectItem value="canada">Canada</SelectItem>
          <SelectItem value="uk">United Kingdom</SelectItem>
          <SelectItem value="germany">Germany</SelectItem>
          <SelectItem value="australia">Australia</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
