import { Link } from "wouter";
import MainNav from "./main-nav";
import MobileNav from "./mobile-nav";
import UserNav from "./user-nav";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

export default function SiteHeader() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="h-6 w-6 rounded-full bg-primary"></span>
            <span className="font-bold text-xl">LearningSpaces</span>
          </Link>
          <MainNav />
        </div>
        
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="mr-1"
            >
              {theme === "light" ? <Moon className="h-[1.2rem] w-[1.2rem]" /> : <Sun className="h-[1.2rem] w-[1.2rem]" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
            <UserNav />
            <MobileNav />
          </nav>
        </div>
      </div>
    </header>
  );
}
