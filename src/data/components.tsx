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
      code: `import {
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
      `,
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
      code: `import { Alert, AlertDescription, AlertTitle } from "@satyam95/donutui";
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
`,
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
      code: `import { Avatar, AvatarFallback, AvatarImage } from "@satyam95/donutui";
      
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
}`,
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
      code: `import { Badge } from "@satyam95/donutui";
      
export function BadgeDemo() {
  return <Badge>Badge</Badge>;
}`,
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
      code: `import {
        Breadcrumb,
        BreadcrumbEllipsis,
        BreadcrumbItem,
        BreadcrumbLink,
        BreadcrumbList,
        BreadcrumbPage,
        BreadcrumbSeparator,
      } from "@satyam95/donutui";
      
      export function BreadcrumbDemo() {
        return (
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbEllipsis />
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        );
      }
      `,
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
      code: `import { Button } from "@satyam95/donutui"
       
export function ButtonDemo() {
  return <Button>Button</Button>
}`,
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
      code: `import { Button } from "@satyam95/donutui";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@satyam95/donutui";
import { Input } from "@satyam95/donutui";
import { Label } from "@satyam95/donutui";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@satyam95/donutui";
      
export function CardDemo() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create a Blog</CardTitle>
        <CardDescription>Launch your personal blog in minutes.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Blog Name</Label>
              <Input id="name" placeholder="e.g., Tech Insights" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Preferred Platform</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Choose a platform" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Reset</Button>
        <Button>Launch Blog</Button>
      </CardFooter>
    </Card>
  );
}`,
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
      code: `import { Checkbox } from "@satyam95/donutui";
      
export function CheckboxDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  );
}`,
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
      code: `import { Button } from "@satyam95/donutui";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@satyam95/donutui";
import { Input } from "@satyam95/donutui";
import { Label } from "@satyam95/donutui";
      
export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
              placeholder="Enter your full name"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
              placeholder="Enter your username"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}`,
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
      code: `import { Button } from "@satyam95/donutui";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@satyam95/donutui";
      
export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Dashboard</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Notifications
            <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Activity Logs
            <DropdownMenuShortcut>⌘A</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Preferences
            <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Team Management</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite Members</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>By Email</DropdownMenuItem>
                <DropdownMenuItem>By SMS</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Generate Invite Link</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            Create New Team
            <DropdownMenuShortcut>⌘T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Integrations</DropdownMenuItem>
          <DropdownMenuItem>API Settings</DropdownMenuItem>
          <DropdownMenuItem>
            Help Center
            <DropdownMenuShortcut>⌘H</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log Out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}`,
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
      code: `import { Input } from "@satyam95/donutui";
      
export function InputDemo() {
  return (
    <Input type="email" placeholder="Email Address" className="max-w-md" />
  );
}`,
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
      code: `import { Checkbox } from "@satyam95/donutui";
import { Label } from "@satyam95/donutui";
      
export function LabelDemo() {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    </div>
  );
}`,
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
      code: `import { RadioGroup, RadioGroupItem } from "@satyam95/donutui";
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
}`,
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
      code: `import {
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
}`,
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
      code: `import { Separator } from "@satyam95/donutui";
      
export function SeparatorDemo() {
  return (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">DonutUI Components</h4>
        <p className="text-sm text-muted-foreground">
          A modern, open-source UI component library for building dynamic interfaces.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Home</div>
        <Separator orientation="vertical" />
        <div>About</div>
        <Separator orientation="vertical" />
        <div>Contact</div>
        <Separator orientation="vertical" />
        <div>GitHub</div>
      </div>
    </div>
  );
}`,
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
      code: `import { Skeleton } from "@satyam95/donutui";
      
  export function SkeletonDemo() {
    return (
      <div className="flex flex-col items-center space-y-4 p-4 border rounded-lg shadow-md w-[200px]">
        <Skeleton className="h-[100px] w-full rounded-md" />
        <div className="space-y-2 w-full">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
        <div className="flex space-x-2 w-full">
          <Skeleton className="h-8 w-1/2 rounded-md" />
          <Skeleton className="h-8 w-1/2 rounded-md" />
        </div>
      </div>
    );
  }`,
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
      code: `import { Label } from "@satyam95/donutui";
import { Switch } from "@satyam95/donutui";
      
export function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="notifications" />
      <Label htmlFor="notifications">Enable Notifications</Label>
    </div>
  );
}`,
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
      code: `import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@satyam95/donutui";
      
const topRunScorers = [
  {
    player: "Virat Kohli",
    team: "Royal Challengers Bangalore",
    matches: 16,
    runs: 870,
    highestScore: "121*",
  },
  {
    player: "David Warner",
    team: "Delhi Capitals",
    matches: 15,
    runs: 815,
    highestScore: "108*",
  },
  {
    player: "Jos Buttler",
    team: "Rajasthan Royals",
    matches: 16,
    runs: 780,
    highestScore: "95",
  },
  {
    player: "Shubman Gill",
    team: "Gujarat Titans",
    matches: 14,
    runs: 730,
    highestScore: "99",
  },
  {
    player: "KL Rahul",
    team: "Lucknow Super Giants",
    matches: 15,
    runs: 695,
    highestScore: "105",
  },
  {
    player: "Ruturaj Gaikwad",
    team: "Chennai Super Kings",
    matches: 14,
    runs: 680,
    highestScore: "92",
  },
  {
    player: "Suryakumar Yadav",
    team: "Mumbai Indians",
    matches: 16,
    runs: 675,
    highestScore: "110*",
  },
];
      
export function TableDemo() {
  return (
    <Table>
      <TableCaption>Top Run-Scorers in IPL 2025</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">Player</TableHead>
          <TableHead>Team</TableHead>
          <TableHead>Matches</TableHead>
          <TableHead>Runs</TableHead>
          <TableHead className="text-right">Highest Score</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {topRunScorers.map((scorer, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{scorer.player}</TableCell>
            <TableCell>{scorer.team}</TableCell>
            <TableCell>{scorer.matches}</TableCell>
            <TableCell>{scorer.runs}</TableCell>
            <TableCell className="text-right">{scorer.highestScore}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Total Runs Scored by Top Players</TableCell>
          <TableCell className="text-right">5,245</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}`,
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
      code: `import { Button } from "@satyam95/donutui";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@satyam95/donutui";
import { Input } from "@satyam95/donutui";
import { Label } from "@satyam95/donutui";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@satyam95/donutui";
      
export function TabsDemo() {
  return (
    <Tabs defaultValue="login" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="register">Register</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Access your account by entering your credentials below.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="yourname@example.com"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Login</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="register">
        <Card>
          <CardHeader>
            <CardTitle>Register</CardTitle>
            <CardDescription>
              Create a new account to get started.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1">
              <Label htmlFor="fullName">Full Name</Label>
              <Input id="fullName" type="text" placeholder="John Doe" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="yourname@example.com"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Create a password"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Re-enter your password"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Register</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}`,
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
      code: `import { Textarea } from "@satyam95/donutui";
      
export function TextareaDemo() {
  return <Textarea placeholder="Type your message here." />;
}`,
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
      code: `"use client";
      
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
}`,
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
      code: `import { Bold } from "lucide-react";
import { Toggle } from "@satyam95/donutui";

export function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle italic">
      <Bold className="h-4 w-4" />
    </Toggle>
  );
}`,
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
      code: `import { Button } from "@satyam95/donutui";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@satyam95/donutui";
      
export function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Button variant="outline">Hover</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}`,
    },
  },
];
