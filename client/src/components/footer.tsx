import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Link href="/" className="flex items-center gap-2">
            <span className="h-6 w-6 rounded-full bg-primary"></span>
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Built with <a href="https://ui.shadcn.com" className="font-medium underline underline-offset-4">shadcn UI</a>
            </p>
          </Link>
        </div>
        <div className="flex gap-4">
          <a href="https://github.com/shadcn/ui" className="text-sm font-medium underline-offset-4 hover:underline">GitHub</a>
          <a href="https://twitter.com/shadcn" className="text-sm font-medium underline-offset-4 hover:underline">Twitter</a>
          <a href="https://discord.gg/zy8GE83" className="text-sm font-medium underline-offset-4 hover:underline">Discord</a>
        </div>
      </div>
    </footer>
  );
}
