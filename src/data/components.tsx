import { AccordionDemo } from "./demo/accordion";
import { AlertDemo } from "./demo/alert";
import { AvatarDemo } from "./demo/avatar";
import { BadgeDemo } from "./demo/badge";
import { BreadcrumbDemo } from "./demo/breadcrumb";
import { ButtonDemo } from "./demo/button";
import { CardDemo } from "./demo/card";
import { CheckboxDemo } from "./demo/checkbox";
import { DialogDemo } from "./demo/dialog";
import { DropdownMenuDemo } from "./demo/dropdownmenu";
import { InputDemo } from "./demo/input";
import { LabelDemo } from "./demo/label";
import { RadioGroupDemo } from "./demo/radiogroup";
import { SelectDemo } from "./demo/select";
import { SeparatorDemo } from "./demo/separator";
import { SkeletonDemo } from "./demo/skeleton";
import { SwitchDemo } from "./demo/switch";
import { TableDemo } from "./demo/table";
import { TabsDemo } from "./demo/tabs";
import { TextareaDemo } from "./demo/textarea";
import { ToastDemo } from "./demo/toast";
import { ToggleDemo } from "./demo/toggle";
import { TooltipDemo } from "./demo/tooltip";

export const components = [
  {
    slug: "accordion",
    componentName: "Accordion",
    description:
      "A vertical list of interactive headings that expand to show detailed content when clicked, suitable for FAQs, menus, and other content organization needs.",
    metadata: {
      title: "Accordion | Donut-UI",
      description:
        "Discover how to use Donut-UI's Accordion component to add expandable content sections to your React or Next.js projects, enhancing user experience and content organization.",
      keywords: [
        "Donut-UI accordion",
        "React accordion",
        "Next.js accordion",
        "expandable content",
        "FAQ component",
        "content organization",
      ],
      canonical: "/components/accordion",
      openGraph: {
        url: `${process.env.NEXT_PUBLIC_NEXTJS_SITE_URL}/components/accordion`,
        title: "Accordion Component | Donut-UI",
        description:
          "Incorporate expandable content sections into your app with Donut-UI's Accordion component, improving user interaction and layout efficiency.",
        image: "/vercel-icon.svg",
      },
    },
    pagination: {
      next: { title: "Alert", slug: "/components/alert" },
    },
    preview: {
      component: <AccordionDemo />,
      code: 'import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "donut-ui";\n\nfunction App() {\n  return (\n    <Accordion>\n      <AccordionItem value="item-1">\n        <AccordionTrigger>Section 1</AccordionTrigger>\n        <AccordionContent>Content for section 1</AccordionContent>\n      </AccordionItem>\n      <AccordionItem value="item-2">\n        <AccordionTrigger>Section 2</AccordionTrigger>\n        <AccordionContent>Content for section 2</AccordionContent>\n      </AccordionItem>\n    </Accordion>\n  );\n}\n\nexport default App;',
    },
  },
  {
    slug: "alert",
    componentName: "Alert",
    description:
      "A flexible notification component that displays success, error, warning, or info messages to users, enhancing communication and feedback.",
    metadata: {
      title: "Alert | Donut-UI",
      description:
        "Implement Donut-UI's Alert component to show contextual notifications like success, error, warning, or info messages in your React or Next.js applications.",
      keywords: [
        "Donut-UI alert",
        "React alert",
        "Next.js alert",
        "notification component",
        "user feedback",
      ],
      canonical: "/components/alert",
      openGraph: {
        url: `${process.env.NEXT_PUBLIC_NEXTJS_SITE_URL}/components/alert`,
        title: "Alert Component | Donut-UI",
        description:
          "Showcase critical updates and status alerts with Donut-UI's customizable Alert component, tailored to fit your application's requirements.",
        image: "/vercel-icon.svg",
      },
    },
    pagination: {
      previous: { title: "Accordion", slug: "/components/accordion" },
      next: { title: "Avatar", slug: "/components/avatar" },
    },
    preview: {
      component: <AlertDemo />,
      code: 'import { Alert, AlertTitle, AlertDescription } from "donut-ui";\n\nfunction App() {\n  return (\n    <Alert variant="success">\n      <AlertTitle>Success</AlertTitle>\n      <AlertDescription>Operation completed successfully!</AlertDescription>\n    </Alert>\n  );\n}\n\nexport default App;',
    },
  },
  {
    slug: "avatar",
    componentName: "Avatar",
    description:
      "An adaptable component for rendering user profile images, complete with a fallback mechanism for when images are missing.",
    metadata: {
      title: "Avatar | Donut-UI",
      description:
        "Leverage Donut-UI's Avatar component to display user profile pictures with fallback support in your React or Next.js projects.",
      keywords: [
        "Donut-UI avatar",
        "React avatar",
        "Next.js avatar",
        "user profile image",
        "avatar component",
        "fallback image",
      ],
      canonical: "/components/avatar",
      openGraph: {
        url: `${process.env.NEXT_PUBLIC_NEXTJS_SITE_URL}/components/avatar`,
        title: "Avatar Component | Donut-UI",
        description:
          "Improve user interfaces with Donut-UI's Avatar component, offering seamless profile image display and fallback capabilities.",
        image: "/vercel-icon.svg",
      },
    },
    pagination: {
      previous: { title: "Alert", slug: "/components/alert" },
      next: { title: "Badge", slug: "/components/badge" },
    },
    preview: {
      component: <AvatarDemo />,
      code: 'import { Avatar, AvatarImage, AvatarFallback } from "donut-ui";\n\nfunction App() {\n  return (\n    <Avatar>\n      <AvatarImage src="path/to/image.jpg" alt="User" />\n      <AvatarFallback>JD</AvatarFallback>\n    </Avatar>\n  );\n}\n\nexport default App;',
    },
  },
  {
    slug: "badge",
    componentName: "Badge",
    description:
      "A compact UI element for indicating status, notifications, or categorizations, often used alongside other components.",
    metadata: {
      title: "Badge | Donut-UI",
      description:
        "Incorporate Donut-UI's Badge component to add status indicators, notification counts, or labels to your React or Next.js applications.",
      keywords: [
        "Donut-UI badge",
        "React badge",
        "Next.js badge",
        "status indicator",
        "notification badge",
        "UI label",
      ],
      canonical: "/components/badge",
      openGraph: {
        url: `${process.env.NEXT_PUBLIC_NEXTJS_SITE_URL}/components/badge`,
        title: "Badge Component | Donut-UI",
        description:
          "Enhance your UI with Donut-UI's Badge component, perfect for displaying statuses, notifications, or categorizations in a compact form.",
        image: "/vercel-icon.svg",
      },
    },
    pagination: {
      previous: { title: "Avatar", slug: "/components/avatar" },
      next: { title: "Breadcrumb", slug: "/components/breadcrumb" },
    },
    preview: {
      component: <BadgeDemo />,
      code: 'import { Badge } from "donut-ui";\n\nfunction App() {\n  return <Badge variant="primary">New</Badge>;\n}\n\nexport default App;',
    },
  },
  {
    slug: "breadcrumb",
    componentName: "Breadcrumb",
    description:
      "A navigational component that illustrates the user's current position within the site's structure through a series of linked hierarchical levels.",
    metadata: {
      title: "Breadcrumb | Donut-UI",
      description:
        "Utilize Donut-UI's Breadcrumb component to provide users with a clear navigation path, enhancing usability in your React or Next.js projects.",
      keywords: [
        "Donut-UI breadcrumb",
        "React breadcrumb",
        "Next.js breadcrumb",
        "navigation component",
        "hierarchical links",
      ],
      canonical: "/components/breadcrumb",
      openGraph: {
        url: `${process.env.NEXT_PUBLIC_NEXTJS_SITE_URL}/components/breadcrumb`,
        title: "Breadcrumb Component | Donut-UI",
        description:
          "Improve navigation and user orientation with Donut-UI's Breadcrumb component, offering a clear path through your application's structure.",
        image: "/vercel-icon.svg",
      },
    },
    pagination: {
      previous: { title: "Badge", slug: "/components/badge" },
      next: { title: "Button", slug: "/components/button" },
    },
    preview: {
      component: <BreadcrumbDemo />,
      code: 'import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "donut-ui";\n\nfunction App() {\n  return (\n    <Breadcrumb>\n      <BreadcrumbItem>\n        <BreadcrumbLink href="/">Home</BreadcrumbLink>\n      </BreadcrumbItem>\n      <BreadcrumbItem>\n        <BreadcrumbLink>Category</BreadcrumbLink>\n      </BreadcrumbItem>\n    </Breadcrumb>\n  );\n}\n\nexport default App;',
    },
  },
  {
    slug: "button",
    componentName: "Button",
    description:
      "A versatile button component that ensures accessibility and consistency, with options for different variants, sizes, and interactive states.",
    metadata: {
      title: "Button | Donut-UI",
      description:
        "Discover Donut-UI's Button component for crafting accessible and customizable buttons, including primary, secondary, and icon variants, in your React or Next.js apps.",
      keywords: [
        "Donut-UI button",
        "React button",
        "Next.js button",
        "UI button component",
        "customizable buttons",
      ],
      canonical: "/components/button",
      openGraph: {
        url: `${process.env.NEXT_PUBLIC_NEXTJS_SITE_URL}/components/button`,
        title: "Button Component | Donut-UI",
        description:
          "Build consistent and accessible buttons with Donut-UI's Button component, offering multiple variants and sizes for your projects.",
        image: "/vercel-icon.svg",
      },
    },
    pagination: {
      previous: { title: "Breadcrumb", slug: "/components/breadcrumb" },
      next: { title: "Card", slug: "/components/card" },
    },
    preview: {
      component: <ButtonDemo />,
      code: 'import { Button } from "donut-ui";\n\nfunction App() {\n  return <Button variant="primary">Click Me</Button>;\n}\n\nexport default App;',
    },
  },
  {
    slug: "card",
    componentName: "Card",
    description:
      "A structured container component featuring optional header, main content, and footer sections, useful for grouping related information.",
    metadata: {
      title: "Card | Donut-UI",
      description:
        "Use Donut-UI's Card component to organize and present information in a clean, structured format within your React or Next.js applications.",
      keywords: [
        "Donut-UI card",
        "React card",
        "Next.js card",
        "UI card component",
        "content container",
      ],
      canonical: "/components/card",
      openGraph: {
        url: `${process.env.NEXT_PUBLIC_NEXTJS_SITE_URL}/components/card`,
        title: "Card Component | Donut-UI",
        description:
          "Present content elegantly with Donut-UI's Card component, ideal for grouping related data in headers, content areas, and footers.",
        image: "/vercel-icon.svg",
      },
    },
    pagination: {
      previous: { title: "Button", slug: "/components/button" },
      next: { title: "Checkbox", slug: "/components/checkbox" },
    },
    preview: {
      component: <CardDemo />,
      code: 'import { Card, CardHeader, CardContent, CardFooter } from "donut-ui";\n\nfunction App() {\n  return (\n    <Card>\n      <CardHeader>Header</CardHeader>\n      <CardContent>Content</CardContent>\n      <CardFooter>Footer</CardFooter>\n    </Card>\n  );\n}\n\nexport default App;',
    },
  },
  {
    slug: "checkbox",
    componentName: "Checkbox",
    description:
      "An interactive element enabling users to select or deselect an option, typically represented by a checked or unchecked box.",
    metadata: {
      title: "Checkbox | Donut-UI",
      description:
        "Implement Donut-UI's Checkbox component to add toggleable selection options to your forms in React or Next.js.",
      keywords: [
        "Donut-UI checkbox",
        "React checkbox",
        "Next.js checkbox",
        "form control",
        "toggle input",
      ],
      canonical: "/components/checkbox",
      openGraph: {
        url: `${process.env.NEXT_PUBLIC_NEXTJS_SITE_URL}/components/checkbox`,
        title: "Checkbox Component | Donut-UI",
        description:
          "Enhance form interactivity with Donut-UI's Checkbox component, allowing users to easily select or deselect options.",
        image: "/vercel-icon.svg",
      },
    },
    pagination: {
      previous: { title: "Card", slug: "/components/card" },
      next: { title: "Dialog", slug: "/components/dialog" },
    },
    preview: {
      component: <CheckboxDemo />,
      code: 'import { Checkbox } from "donut-ui";\n\nfunction App() {\n  return <Checkbox label="Accept terms" />;\n}\n\nexport default App;',
    },
  },
  {
    slug: "dialog",
    componentName: "Dialog",
    description:
      "A modal overlay that presents information or requires user interaction, temporarily disabling the underlying content.",
    metadata: {
      title: "Dialog | Donut-UI",
      description:
        "Incorporate Donut-UI's Dialog component to display modal windows for alerts, forms, or additional content in your React or Next.js projects.",
      keywords: [
        "Donut-UI dialog",
        "React dialog",
        "Next.js dialog",
        "modal window",
        "popup component",
      ],
      canonical: "/components/dialog",
      openGraph: {
        url: `${process.env.NEXT_PUBLIC_NEXTJS_SITE_URL}/components/dialog`,
        title: "Dialog Component | Donut-UI",
        description:
          "Engage users with Donut-UI's Dialog component, perfect for modals, alerts, and interactive overlays in your application.",
        image: "/vercel-icon.svg",
      },
    },
    pagination: {
      previous: { title: "Checkbox", slug: "/components/checkbox" },
      next: { title: "Dropdown Menu", slug: "/components/dropdown-menu" },
    },
    preview: {
      component: <DialogDemo />,
      code: 'import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "donut-ui";\n\nfunction App() {\n  return (\n    <Dialog>\n      <DialogTrigger>Open Dialog</DialogTrigger>\n      <DialogContent>\n        <DialogHeader>\n          <DialogTitle>Title</DialogTitle>\n          <DialogDescription>Description</DialogDescription>\n        </DialogHeader>\n      </DialogContent>\n    </Dialog>\n  );\n}\n\nexport default App;',
    },
  },
  {
    slug: "dropdown-menu",
    componentName: "Dropdown Menu",
    description:
      "A component that reveals a list of options or actions when a user interacts with a trigger, typically a button.",
    metadata: {
      title: "Dropdown Menu | Donut-UI",
      description:
        "Add interactive menus to your UI with Donut-UI's Dropdown Menu component, enabling users to access actions or selections easily in React or Next.js.",
      keywords: [
        "Donut-UI dropdown menu",
        "React dropdown",
        "Next.js dropdown",
        "menu component",
        "action list",
      ],
      canonical: "/components/dropdown-menu",
      openGraph: {
        url: `${process.env.NEXT_PUBLIC_NEXTJS_SITE_URL}/components/dropdown-menu`,
        title: "Dropdown Menu Component | Donut-UI",
        description:
          "Provide users with contextual options using Donut-UI's Dropdown Menu component, triggered by a simple button click.",
        image: "/vercel-icon.svg",
      },
    },
    pagination: {
      previous: { title: "Dialog", slug: "/components/dialog" },
      next: { title: "Input", slug: "/components/input" },
    },
    preview: {
      component: <DropdownMenuDemo />,
      code: 'import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "donut-ui";\n\nfunction App() {\n  return (\n    <DropdownMenu>\n      <DropdownMenuTrigger>Menu</DropdownMenuTrigger>\n      <DropdownMenuContent>\n        <DropdownMenuItem>Option 1</DropdownMenuItem>\n        <DropdownMenuItem>Option 2</DropdownMenuItem>\n      </DropdownMenuContent>\n    </DropdownMenu>\n  );\n}\n\nexport default App;',
    },
  },
  {
    slug: "input",
    componentName: "Input",
    description:
      "A form element for capturing user input, such as text, numbers, or other data types.",
    metadata: {
      title: "Input | Donut-UI",
      description:
        "Utilize Donut-UI's Input component to create accessible and customizable form fields for user data entry in your React or Next.js applications.",
      keywords: [
        "Donut-UI input",
        "React input",
        "Next.js input",
        "form field",
        "user input component",
      ],
      canonical: "/components/input",
      openGraph: {
        url: `${process.env.NEXT_PUBLIC_NEXTJS_SITE_URL}/components/input`,
        title: "Input Component | Donut-UI",
        description:
          "Capture user data effectively with Donut-UI's Input component, designed for seamless integration and accessibility.",
        image: "/vercel-icon.svg",
      },
    },
    pagination: {
      previous: { title: "Dropdown Menu", slug: "/components/dropdown-menu" },
      next: { title: "Label", slug: "/components/label" },
    },
    preview: {
      component: <InputDemo />,
      code: 'import { Input } from "donut-ui";\n\nfunction App() {\n  return <Input placeholder="Enter text" type="text" />;\n}\n\nexport default App;',
    },
  },
  {
    slug: "label",
    componentName: "Label",
    description:
      "A component that provides descriptive text for form controls, ensuring accessibility and clarity.",
    metadata: {
      title: "Label | Donut-UI",
      description:
        "Enhance form usability with Donut-UI's Label component, associating descriptive text with input fields in your React or Next.js projects.",
      keywords: [
        " verstehen",
        "React label",
        "Next.js label",
        "form label",
        "accessible forms",
      ],
      canonical: "/components/label",
      openGraph: {
        url: `${process.env.NEXT_PUBLIC_NEXTJS_SITE_URL}/components/label`,
        title: "Label Component | Donut-UI",
        description:
          "Improve form accessibility and user experience with Donut-UI's Label component, linking text to form controls effectively.",
        image: "/vercel-icon.svg",
      },
    },
    pagination: {
      previous: { title: "Input", slug: "/components/input" },
      next: { title: "Radio Group", slug: "/components/radio-group" },
    },
    preview: {
      component: <LabelDemo />,
      code: 'import { Label } from "donut-ui";\n\nfunction App() {\n  return <Label htmlFor="input-id">Username</Label>;\n}\n\nexport default App;',
    },
  },
  {
    slug: "radio-group",
    componentName: "Radio Group",
    description:
      "A collection of mutually exclusive options, allowing users to select only one choice from a list.",
    metadata: {
      title: "Radio Group | Donut-UI",
      description:
        "Implement Donut-UI's Radio Group component to offer users a selection of exclusive options in your React or Next.js forms.",
      keywords: [
        "Donut-UI radio group",
        "React radio buttons",
        "Next.js radio group",
        "form selection",
        "exclusive choices",
      ],
      canonical: "/components/radio-group",
      openGraph: {
        url: `${process.env.NEXT_PUBLIC_NEXTJS_SITE_URL}/components/radio-group`,
        title: "Radio Group Component | Donut-UI",
        description:
          "Enable single-choice selections with Donut-UI's Radio Group component, perfect for forms requiring mutually exclusive options.",
        image: "/vercel-icon.svg",
      },
    },
    pagination: {
      previous: { title: "Label", slug: "/components/label" },
      next: { title: "Select", slug: "/components/select" },
    },
    preview: {
      component: <RadioGroupDemo />,
      code: 'import { RadioGroup, RadioGroupItem } from "donut-ui";\n\nfunction App() {\n  return (\n    <RadioGroup defaultValue="option1">\n      <RadioGroupItem value="option1">Option 1</RadioGroupItem>\n      <RadioGroupItem value="option2">Option 2</RadioGroupItem>\n    </RadioGroup>\n  );\n}\n\nexport default App;',
    },
  },
  {
    slug: "select",
    componentName: "Select",
    description:
      "A component that presents a list of choices in a dropdown format, activated by user interaction.",
    metadata: {
      title: "Select | Donut-UI",
      description:
        "Use Donut-UI's Select component to add dropdown menus for option selection in your React or Next.js applications.",
      keywords: [
        "Donut-UI select",
        "React select",
        "Next.js select",
        "dropdown menu",
        "option list",
      ],
      canonical: "/components/select",
      openGraph: {
        url: `${process.env.NEXT_PUBLIC_NEXTJS_SITE_URL}/components/select`,
        title: "Select Component | Donut-UI",
        description:
          "Facilitate user choices with Donut-UI's Select component, offering a sleek dropdown for selecting options.",
        image: "/vercel-icon.svg",
      },
    },
    pagination: {
      previous: { title: "Radio Group", slug: "/components/radio-group" },
      next: { title: "Separator", slug: "/components/separator" },
    },
    preview: {
      component: <SelectDemo />,
      code: 'import { Select, SelectTrigger, SelectContent, SelectItem } from "donut-ui";\n\nfunction App() {\n  return (\n    <Select>\n      <SelectTrigger>Select an option</SelectTrigger>\n      <SelectContent>\n        <SelectItem value="option1">Option 1</SelectItem>\n        <SelectItem value="option2">Option 2</SelectItem>\n      </SelectContent>\n    </Select>\n  );\n}\n\nexport default App;',
    },
  },
  {
    slug: "separator",
    componentName: "Separator",
    description:
      "A UI element that divides sections of content, either visually with a line or semantically for accessibility.",
    metadata: {
      title: "Separator | Donut-UI",
      description:
        "Incorporate Donut-UI's Separator component to organize and divide content areas in your React or Next.js interfaces.",
      keywords: [
        "Donut-UI separator",
        "React separator",
        "Next.js separator",
        "content divider",
        "UI spacer",
      ],
      canonical: "/components/separator",
      openGraph: {
        url: `${process.env.NEXT_PUBLIC_NEXTJS_SITE_URL}/components/separator`,
        title: "Separator Component | Donut-UI",
        description:
          "Enhance layout structure with Donut-UI's Separator component, providing clear divisions between content sections.",
        image: "/vercel-icon.svg",
      },
    },
    pagination: {
      previous: { title: "Select", slug: "/components/select" },
      next: { title: "Skeleton", slug: "/components/skeleton" },
    },
    preview: {
      component: <SeparatorDemo />,
      code: 'import { Separator } from "donut-ui";\n\nfunction App() {\n  return <Separator orientation="horizontal" />;\n}\n\nexport default App;',
    },
  },
  {
    slug: "skeleton",
    componentName: "Skeleton",
    description:
      "A component that displays temporary placeholders during content loading, improving perceived performance.",
    metadata: {
      title: "Skeleton | Donut-UI",
      description:
        "Improve user experience during loading times with Donut-UI's Skeleton component in your React or Next.js apps.",
      keywords: [
        "Donut-UI skeleton",
        "React skeleton",
        "Next.js skeleton",
        "loading placeholder",
        "content loader",
      ],
      canonical: "/components/skeleton",
      openGraph: {
        url: `${process.env.NEXT_PUBLIC_NEXTJS_SITE_URL}/components/skeleton`,
        title: "Skeleton Component | Donut-UI",
        description:
          "Maintain a smooth user experience with Donut-UI's Skeleton component, displaying placeholders while content loads.",
        image: "/vercel-icon.svg",
      },
    },
    pagination: {
      previous: { title: "Separator", slug: "/components/separator" },
      next: { title: "Switch", slug: "/components/switch" },
    },
    preview: {
      component: <SkeletonDemo />,
      code: 'import { Skeleton } from "donut-ui";\n\nfunction App() {\n  return <Skeleton width="100%" height="20px" />;\n}\n\nexport default App;',
    },
  },
  {
    slug: "switch",
    componentName: "Switch",
    description:
      "An interactive toggle switch for enabling or disabling a setting or feature.",
    metadata: {
      title: "Switch | Donut-UI",
      description:
        "Add toggle functionality to your UI with Donut-UI's Switch component, perfect for on/off settings in React or Next.js.",
      keywords: [
        "Donut-UI switch",
        "React switch",
        "Next.js switch",
        "toggle control",
        "on/off switch",
      ],
      canonical: "/components/switch",
      openGraph: {
        url: `${process.env.NEXT_PUBLIC_NEXTJS_SITE_URL}/components/switch`,
        title: "Switch Component | Donut-UI",
        description:
          "Empower users to toggle settings easily with Donut-UI's Switch component, designed for intuitive interaction.",
        image: "/vercel-icon.svg",
      },
    },
    pagination: {
      previous: { title: "Skeleton", slug: "/components/skeleton" },
      next: { title: "Table", slug: "/components/table" },
    },
    preview: {
      component: <SwitchDemo />,
      code: 'import { Switch } from "donut-ui";\n\nfunction App() {\n  return <Switch defaultChecked />;\n}\n\nexport default App;',
    },
  },
  {
    slug: "table",
    componentName: "Table",
    description:
      "A flexible table element that adapts to different screen sizes, ideal for displaying tabular data.",
    metadata: {
      title: "Table | Donut-UI",
      description:
        "Display data effectively with Donut-UI's responsive Table component in your React or Next.js applications.",
      keywords: [
        "Donut-UI table",
        "React table",
        "Next.js table",
        "responsive table",
        "data grid",
      ],
      canonical: "/components/table",
      openGraph: {
        url: `${process.env.NEXT_PUBLIC_NEXTJS_SITE_URL}/components/table`,
        title: "Table Component | Donut-UI",
        description:
          "Present tabular data seamlessly across devices with Donut-UI's responsive Table component.",
        image: "/vercel-icon.svg",
      },
    },
    pagination: {
      previous: { title: "Switch", slug: "/components/switch" },
      next: { title: "Tabs", slug: "/components/tabs" },
    },
    preview: {
      component: <TableDemo />,
      code: 'import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "donut-ui";\n\nfunction App() {\n  return (\n    <Table>\n      <TableHeader>\n        <TableRow>\n          <TableHead>Header 1</TableHead>\n          <TableHead>Header 2</TableHead>\n        </TableRow>\n      </TableHeader>\n      <TableBody>\n        <TableRow>\n          <TableCell>Cell 1</TableCell>\n          <TableCell>Cell 2</TableCell>\n        </TableRow>\n      </TableBody>\n    </Table>\n  );\n}\n\nexport default App;',
    },
  },
  {
    slug: "tabs",
    componentName: "Tabs",
    description:
      "A component that organizes content into multiple panels, navigable via tabs, with only one panel visible at a time.",
    metadata: {
      title: "Tabs | Donut-UI",
      description:
        "Organize content efficiently with Donut-UI's Tabs component, allowing users to switch between different sections in React or Next.js.",
      keywords: [
        "Donut-UI tabs",
        "React tabs",
        "Next.js tabs",
        "tabbed interface",
        "content panels",
      ],
      canonical: "/components/tabs",
      openGraph: {
        url: `${process.env.NEXT_PUBLIC_NEXTJS_SITE_URL}/components/tabs`,
        title: "Tabs Component | Donut-UI",
        description:
          "Streamline content navigation with Donut-UI's Tabs component, offering a clean way to switch between related sections.",
        image: "/vercel-icon.svg",
      },
    },
    pagination: {
      previous: { title: "Table", slug: "/components/table" },
      next: { title: "Textarea", slug: "/components/textarea" },
    },
    preview: {
      component: <TabsDemo />,
      code: 'import { Tabs, TabsList, TabsTrigger, TabsContent } from "donut-ui";\n\nfunction App() {\n  return (\n    <Tabs defaultValue="tab1">\n      <TabsList>\n        <TabsTrigger value="tab1">Tab 1</TabsTrigger>\n        <TabsTrigger value="tab2">Tab 2</TabsTrigger>\n      </TabsList>\n      <TabsContent value="tab1">Content 1</TabsContent>\n      <TabsContent value="tab2">Content 2</TabsContent>\n    </Tabs>\n  );\n}\n\nexport default App;',
    },
  },
  {
    slug: "textarea",
    componentName: "Textarea",
    description:
      "A multi-line text input field for capturing longer user inputs, such as comments or descriptions.",
    metadata: {
      title: "Textarea | Donut-UI",
      description:
        "Enable users to enter extended text inputs with Donut-UI's Textarea component in your React or Next.js forms.",
      keywords: [
        "Donut-UI textarea",
        "React textarea",
        "Next.js textarea",
        "multi-line input",
        "form text field",
      ],
      canonical: "/components/textarea",
      openGraph: {
        url: `${process.env.NEXT_PUBLIC_NEXTJS_SITE_URL}/components/textarea`,
        title: "Textarea Component | Donut-UI",
        description:
          "Facilitate detailed user input with Donut-UI's Textarea component, perfect for comments, descriptions, and more.",
        image: "/vercel-icon.svg",
      },
    },
    pagination: {
      previous: { title: "Tabs", slug: "/components/tabs" },
      next: { title: "Toast", slug: "/components/toast" },
    },
    preview: {
      component: <TextareaDemo />,
      code: 'import { Textarea } from "donut-ui";\n\nfunction App() {\n  return <Textarea placeholder="Enter your message" />;\n}\n\nexport default App;',
    },
  },
  {
    slug: "toast",
    componentName: "Toast",
    description:
      "A temporary notification message that informs users of events or actions, disappearing after a short period.",
    metadata: {
      title: "Toast | Donut-UI",
      description:
        "Notify users of important events with Donut-UI's Toast component, providing temporary, non-intrusive messages in React or Next.js.",
      keywords: [
        "Donut-UI toast",
        "React toast",
        "Next.js toast",
        "notification message",
        "temporary alert",
      ],
      canonical: "/components/toast",
      openGraph: {
        url: `${process.env.NEXT_PUBLIC_NEXTJS_SITE_URL}/components/toast`,
        title: "Toast Component | Donut-UI",
        description:
          "Keep users informed with Donut-UI's Toast component, delivering brief, auto-dismissing notifications.",
        image: "/vercel-icon.svg",
      },
    },
    pagination: {
      previous: { title: "Textarea", slug: "/components/textarea" },
      next: { title: "Toggle", slug: "/components/toggle" },
    },
    preview: {
      component: <ToastDemo />,
      code: 'import { Toast, ToastProvider, ToastViewport } from "donut-ui";\n\nfunction App() {\n  return (\n    <ToastProvider>\n      <Toast>\n        <Toast.Title>Success</Toast.Title>\n        <Toast.Description>Action completed</Toast.Description>\n      </Toast>\n      <ToastViewport />\n    </ToastProvider>\n  );\n}\n\nexport default App;',
    },
  },
  {
    slug: "toggle",
    componentName: "Toggle",
    description:
      "A button that alternates between two states, typically on and off, upon each activation.",
    metadata: {
      title: "Toggle | Donut-UI",
      description:
        "Add simple on/off controls to your interface with Donut-UI's Toggle component in React or Next.js.",
      keywords: [
        "Donut-UI toggle",
        "React toggle",
        "Next.js toggle",
        "state button",
        "on/off control",
      ],
      canonical: "/components/toggle",
      openGraph: {
        url: `${process.env.NEXT_PUBLIC_NEXTJS_SITE_URL}/components/toggle`,
        title: "Toggle Component | Donut-UI",
        description:
          "Implement straightforward state changes with Donut-UI's Toggle component, ideal for binary settings.",
        image: "/vercel-icon.svg",
      },
    },
    pagination: {
      previous: { title: "Toast", slug: "/components/toast" },
      next: { title: "Tooltip", slug: "/components/tooltip" },
    },
    preview: {
      component: <ToggleDemo />,
      code: 'import { Toggle } from "donut-ui";\n\nfunction App() {\n  return <Toggle>Toggle</Toggle>;\n}\n\nexport default App;',
    },
  },
  {
    slug: "tooltip",
    componentName: "Tooltip",
    description:
      "A small overlay that appears on hover or focus, providing additional context or information about an element.",
    metadata: {
      title: "Tooltip | Donut-UI",
      description:
        "Enhance user understanding with Donut-UI's Tooltip component, offering contextual information on hover or focus in React or Next.js.",
      keywords: [
        "Donut-UI tooltip",
        "React tooltip",
        "Next.js tooltip",
        "info popup",
        "hover text",
      ],
      canonical: "/components/tooltip",
      openGraph: {
        url: `${process.env.NEXT_PUBLIC_NEXTJS_SITE_URL}/components/tooltip`,
        title: "Tooltip Component | Donut-UI",
        description:
          "Provide extra context seamlessly with Donut-UI's Tooltip component, displaying helpful information on interaction.",
        image: "/vercel-icon.svg",
      },
    },
    pagination: {
      previous: { title: "Toggle", slug: "/components/toggle" },
    },
    preview: {
      component: <TooltipDemo />,
      code: 'import { Tooltip, TooltipTrigger, TooltipContent } from "donut-ui";\n\nfunction App() {\n  return (\n    <Tooltip>\n      <TooltipTrigger>Hover me</TooltipTrigger>\n      <TooltipContent>Tooltip text</TooltipContent>\n    </Tooltip>\n  );\n}\n\nexport default App;',
    },
  },
];
