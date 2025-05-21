import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CodeIcon, LayoutIcon, FileTextIcon } from "lucide-react";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <div className="border-b">
        <div className="container flex flex-col items-center justify-center space-y-4 py-10 text-center sm:py-16 md:py-20">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Next.js with shadcn UI</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            A production-ready template using Next.js, TypeScript, and shadcn UI components.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
            <Button size="lg" asChild>
              <Link href="/components">Get Started</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/code-example">Documentation</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <section className="container py-12 md:py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
          <Card className="flex flex-col items-center space-y-2 p-6 text-center shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <CodeIcon className="h-6 w-6 text-primary" />
            </div>
            <CardContent className="p-0 pt-4">
              <h3 className="text-xl font-bold">TypeScript Integration</h3>
              <p className="text-muted-foreground">Full TypeScript support with strict mode enabled for type safety.</p>
            </CardContent>
          </Card>

          <Card className="flex flex-col items-center space-y-2 p-6 text-center shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <LayoutIcon className="h-6 w-6 text-primary" />
            </div>
            <CardContent className="p-0 pt-4">
              <h3 className="text-xl font-bold">shadcn UI Components</h3>
              <p className="text-muted-foreground">Beautiful, accessible UI components with consistent styling.</p>
            </CardContent>
          </Card>

          <Card className="flex flex-col items-center space-y-2 p-6 text-center shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <FileTextIcon className="h-6 w-6 text-primary" />
            </div>
            <CardContent className="p-0 pt-4">
              <h3 className="text-xl font-bold">ESLint & Prettier</h3>
              <p className="text-muted-foreground">Consistent code style with built-in linting and formatting.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Start building your Next.js application with shadcn UI components.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button variant="secondary" asChild>
                <a href="https://github.com/shadcn/ui">Clone Repository</a>
              </Button>
              <Button variant="outline" className="border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <a href="https://ui.shadcn.com/docs">Read Documentation</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
