import { AccordionDemo } from "./demo/accordion";
import { AlertDemo } from "./demo/alert";
import { ButtonDemo } from "./demo/button";

export const components = [
  {
    slug: "accordion",
    componentName: "Accordion",
    description: "A responsive, vertical stack of interactive headings that expand or collapse to reveal detailed content—perfect for FAQs, menus, and more.",
    metadata: {
      title: "Accordion | Donut-UI",
      description: "Learn how to implement the Accordion component from Donut-UI to create collapsible content sections in your React or Next.js applications.",
      keywords: [
        "Donut-UI accordion",
        "React accordion",
        "Next.js accordion",
        "collapsible sections",
        "FAQ accordion"
      ],
      canonical: "/components/accordion",
      openGraph: {
        url: "https://your-domain.com/components/accordion",
        title: "Accordion Component | Donut-UI",
        description: "Effortlessly add collapsible content sections with Donut-UI's Accordion component for enhanced UX and streamlined layouts.",
        image: "https://your-domain.com/og-images/components/accordion.png"
      }
    },
    pagination: {
      next: { title: "Alert", slug: "/components/alert" }
    },
    preview: {
      component: <AccordionDemo />,
      code: `import { Accordion } from "donut-ui";

function App() {
  return (
    <Accordion>
      {/* Your items here */}
    </Accordion>
  );
}

export default App;`
    }
  },
  {
    slug: "alert",
    componentName: "Alert",
    description: "A versatile notification banner that surfaces success, error, warning, or informational messages to users.",
    metadata: {
      title: "Alert | Donut-UI",
      description: "Use the Alert component from Donut-UI to display contextual messages and feedback—success, error, warning, or info—in your React/Next.js apps.",
      keywords: [
        "Donut-UI alert",
        "React alert",
        "Next.js alert",
        "notification banner",
        "user feedback"
      ],
      canonical: "/components/alert",
      openGraph: {
        url: "https://your-domain.com/components/alert",
        title: "Alert Component | Donut-UI",
        description: "Display important notifications and status messages with Donut-UI's Alert component, fully customizable for your app’s needs.",
        image: "https://your-domain.com/og-images/components/alert.png"
      }
    },
    pagination: {
      previous: { title: "Accordion", slug: "/components/accordion" },
      next: { title: "Avatar", slug: "/components/avatar" }
    },
    preview: {
      component: <AlertDemo />,
      code: `import { Alert } from "donut-ui";

function App() {
  return (
    <Alert type="success">
      Operation completed successfully!
    </Alert>
  );
}

export default App;`
    }
  },
  {
    slug: "button",
    componentName: "Button",
    description: "An accessible, customizable button component supporting variants, sizes, and states for consistent UI across applications.",
    metadata: {
      title: "Button | Donut-UI",
      description: "Explore Donut-UI’s Button component to create primary, secondary, and icon buttons with ease. Fully customizable for React and Next.js.",
      keywords: [
        "Donut-UI button",
        "React button",
        "Next.js button",
        "UI button component",
        "customizable buttons"
      ],
      canonical: "/components/button",
      openGraph: {
        url: "https://your-domain.com/components/button",
        title: "Button Component | Donut-UI",
        description: "Build consistent and accessible buttons with Donut-UI's Button component, offering multiple variants and sizes for your projects.",
        image: "https://your-domain.com/og-images/components/button.png"
      }
    },
    preview: {
      component: <ButtonDemo />,
      code: `import { Button } from "donut-ui";

function App() {
  return <Button variant="primary">Click Me</Button>;
}

export default App;`
    }
  }
];
