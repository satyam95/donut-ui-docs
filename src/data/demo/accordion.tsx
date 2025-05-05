import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@satyam95/donutui";

export function AccordionDemo() {
  return (
    <Accordion type="single" className="w-full">
      <AccordionItem id="item-1">
        <AccordionTrigger>
          What is the purpose of this product?
        </AccordionTrigger>
        <AccordionContent>
          It helps streamline workflows and improve team collaboration
          effectively.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem id="item-2">
        <AccordionTrigger>What are the main features?</AccordionTrigger>
        <AccordionContent>
          Features include real-time collaboration, analytics, and tool
          integrations.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem id="item-3">
        <AccordionTrigger>How secure is the platform?</AccordionTrigger>
        <AccordionContent>
          The platform uses encryption, multi-factor authentication, and
          complies with GDPR.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
