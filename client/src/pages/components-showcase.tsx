import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { 
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Plus } from "lucide-react";

export default function ComponentsShowcase() {
  const [activeTab, setActiveTab] = useState("buttons");

  return (
    <main className="flex-1">
      <section className="bg-muted py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Component Showcase</h2>
            <p className="text-muted-foreground">
              See shadcn UI components in action with examples from the library.
            </p>
          </div>
          
          <div className="mx-auto mt-10 max-w-3xl">
            <Tabs defaultValue="buttons" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="w-full justify-start">
                <TabsTrigger value="buttons">Buttons</TabsTrigger>
                <TabsTrigger value="cards">Cards</TabsTrigger>
                <TabsTrigger value="forms">Forms</TabsTrigger>
                <TabsTrigger value="dialogs">Dialogs</TabsTrigger>
              </TabsList>
              
              <TabsContent value="buttons" className="mt-2">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-wrap gap-4">
                      <Button>Primary</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="outline">Outline</Button>
                      <Button variant="destructive">Destructive</Button>
                      <Button variant="link">Link</Button>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-4">
                      <Button size="icon">
                        <Plus className="h-4 w-4" />
                        <span className="sr-only">Add</span>
                      </Button>
                      <Button>
                        <Plus className="mr-2 h-4 w-4" />
                        New
                      </Button>
                      <Button>
                        Save
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-4 w-4">
                          <polyline points="8 9 12 5 16 9"></polyline>
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                        </svg>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="cards" className="mt-2">
                <Card>
                  <CardContent className="p-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <Card>
                        <CardContent className="p-6">
                          <h3 className="font-semibold leading-none tracking-tight mb-1">Basic Card</h3>
                          <p className="text-sm text-muted-foreground mb-4">Default card component for content.</p>
                          <p>Cards display content and actions about a single subject.</p>
                          <div className="flex items-center mt-4">
                            <Button variant="outline">View Details</Button>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-6">
                          <h3 className="font-semibold leading-none tracking-tight mb-1">Featured Card</h3>
                          <p className="text-sm text-muted-foreground mb-4">Card with media content.</p>
                          <AspectRatio ratio={16 / 9} className="bg-muted rounded-md mb-3">
                            <div className="w-full h-full bg-gray-300 rounded-md" />
                          </AspectRatio>
                          <p>Premium content with visual representation.</p>
                          <div className="flex items-center justify-between mt-4">
                            <Button>Get Started</Button>
                            <Button variant="link">Learn More</Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="forms" className="mt-2">
                <Card>
                  <CardContent className="p-6">
                    <form onSubmit={(e) => e.preventDefault()}>
                      <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                          <Label htmlFor="name">Name</Label>
                          <Input id="name" placeholder="Enter your name" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="Enter your email" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                          <Label htmlFor="message">Message</Label>
                          <Textarea id="message" placeholder="Type your message here" className="min-h-[80px]" />
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="terms" />
                          <Label htmlFor="terms">Accept terms and conditions</Label>
                        </div>
                        <Button type="submit">Submit</Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="dialogs" className="mt-2">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button>Alert Dialog</Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                              This action cannot be undone. This will permanently delete your account
                              and remove your data from our servers.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction>Continue</AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                      
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button>Form Dialog</Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Edit profile</DialogTitle>
                            <DialogDescription>
                              Make changes to your profile here. Click save when you're done.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div className="grid gap-2">
                              <Label htmlFor="name">Name</Label>
                              <Input id="name" placeholder="Enter your name" />
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor="username">Username</Label>
                              <Input id="username" placeholder="Enter your username" />
                            </div>
                          </div>
                          <DialogFooter>
                            <Button type="submit">Save changes</Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                      
                      <Drawer>
                        <DrawerTrigger asChild>
                          <Button variant="secondary">Drawer</Button>
                        </DrawerTrigger>
                        <DrawerContent>
                          <DrawerHeader>
                            <DrawerTitle>Edit profile</DrawerTitle>
                            <DrawerDescription>
                              Make changes to your profile here. Click save when you're done.
                            </DrawerDescription>
                          </DrawerHeader>
                          <div className="p-4 pb-0">
                            <div className="grid gap-4">
                              <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" placeholder="Enter your email" />
                              </div>
                              <div className="grid gap-2">
                                <Label htmlFor="bio">Bio</Label>
                                <Textarea id="bio" placeholder="Tell us about yourself" />
                              </div>
                            </div>
                          </div>
                          <DrawerFooter>
                            <Button>Save changes</Button>
                            <DrawerClose asChild>
                              <Button variant="outline">Cancel</Button>
                            </DrawerClose>
                          </DrawerFooter>
                        </DrawerContent>
                      </Drawer>
                    </div>
                    
                    <div className="mt-4 rounded-lg border p-4">
                      <h4 className="text-sm font-medium">Dialog Components</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Dialogs are useful for requesting confirmation, displaying important notifications, or collecting information from users in a focused context.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </main>
  );
}
