"use client";

import { Button } from "@satyam95/donutui";
import { toast } from "@satyam95/donutui";

export function ToastDemo() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast("Meeting Scheduled", {
          description:
            "Your meeting with John Doe is scheduled for Monday, May 08, 2025, at 10:00 AM.",
          action: {
            label: "Reschedule",
            onClick: () => console.log("Reschedule clicked"),
          },
          duration: 3000,
        })
      }
    >
      Show Toast
    </Button>
  );
}
