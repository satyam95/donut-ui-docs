import * as React from "react";

import { Button } from "@satyam95/donutui";
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
}
