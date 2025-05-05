import { Alert, AlertDescription, AlertTitle } from "@satyam95/donutui";
import { Info } from "lucide-react";

export function AlertDemo() {
  return (
    <Alert>
      <Info className="h-4 w-4" />
      <AlertTitle>Important Notice</AlertTitle>
      <AlertDescription>
        Your subscription is about to expire. Renew now to avoid interruptions.
      </AlertDescription>
    </Alert>
  );
}
