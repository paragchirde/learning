import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
        >
          <Menu className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-3/4 max-w-sm p-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-semibold" onClick={() => setOpen(false)}>
            <span className="h-6 w-6 rounded-full bg-primary"></span>
            <span>shadcn</span>
          </Link>
          <SheetClose asChild>
            <Button variant="ghost" size="icon" className="rounded-sm">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </SheetClose>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              <Link 
                href="/" 
                className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-muted"
                onClick={() => setOpen(false)}
              >
                Dashboard
              </Link>
              <Link 
                href="/components" 
                className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-muted"
                onClick={() => setOpen(false)}
              >
                Components
              </Link>
              <Link 
                href="/code-example" 
                className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-muted"
                onClick={() => setOpen(false)}
              >
                Documentation
              </Link>
              <Link 
                href="/settings" 
                className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-muted"
                onClick={() => setOpen(false)}
              >
                Settings
              </Link>
            </div>
            <div className="py-6">
              <Link 
                href="#" 
                className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-muted"
                onClick={() => setOpen(false)}
              >
                Sign Out
              </Link>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
