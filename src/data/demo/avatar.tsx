import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "donut-ui"
  
  export function AvatarDemo() {
    return (
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    )
  }
  