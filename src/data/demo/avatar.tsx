import { Avatar, AvatarFallback, AvatarImage } from "@satyam95/donutui";

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage
        src="https://placehold.co/150"
        alt="John Doe Profile Picture"
      />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  );
}
