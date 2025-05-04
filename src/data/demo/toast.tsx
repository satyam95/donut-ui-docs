"use client";

import { Button } from "donut-ui";
import { toast } from "donut-ui";

export function ToastDemo() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast("Event has been created", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
          duration: 2000,
        })
      }
    >
      Show Toast
    </Button>
  );
}
