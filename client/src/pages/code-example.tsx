import { Card, CardContent } from "@/components/ui/card";

export default function CodeExample() {
  return (
    <main className="flex-1">
      <section className="container py-12 md:py-16">
        <div className="mx-auto max-w-3xl space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Project Structure</h2>
          <p className="text-muted-foreground">
            A well-organized, production-ready project structure for your Next.js application.
          </p>
          
          <Card className="mt-6">
            <CardContent className="p-0">
              <pre className="p-6 text-sm overflow-x-auto rounded-lg bg-muted font-mono">
{`📁 project-root
├── 📁 app
│   ├── 📁 (auth)
│   │   ├── 📁 login
│   │   └── 📁 register
│   ├── 📁 dashboard
│   ├── 📁 components
│   └── 📄 layout.tsx
├── 📁 components
│   ├── 📁 ui
│   │   ├── 📄 button.tsx
│   │   ├── 📄 card.tsx
│   │   ├── 📄 dialog.tsx
│   │   ├── 📄 form.tsx
│   │   └── 📄 ...more components
│   ├── 📄 main-nav.tsx
│   ├── 📄 site-header.tsx
│   └── 📄 ...more composite components
├── 📁 lib
│   ├── 📄 utils.ts
│   └── 📄 ...other utilities
├── 📁 types
│   └── 📄 index.ts
├── 📄 .eslintrc.json
├── 📄 .prettierrc
├── 📄 next.config.js
├── 📄 tailwind.config.ts
├── 📄 tsconfig.json
└── 📄 package.json`}
              </pre>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
