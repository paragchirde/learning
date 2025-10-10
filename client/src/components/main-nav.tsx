import { Link, useRoute } from "wouter";

export default function MainNav() {
  const [isHomeActive] = useRoute("/");
  const [isComponentsActive] = useRoute("/components");
  const [isDocsActive] = useRoute("/code-example");
  const [isSettingsActive] = useRoute("/settings");

  return (
    <nav className="hidden md:flex gap-6">
      <Link
        href="/"
        className={`text-sm font-medium transition-colors hover:text-primary ${
          isHomeActive ? "text-primary" : ""
        }`}
      >
        Home
      </Link>
      <Link
        href="/polling-demo"
        className={`text-sm font-medium transition-colors hover:text-primary ${
          isComponentsActive ? "text-primary" : ""
        }`}
      >
        Polling Demo
      </Link>
      <Link
        href="/components"
        className={`text-sm font-medium transition-colors hover:text-primary ${
          isDocsActive ? "text-primary" : ""
        }`}
      >
        Components
      </Link>
      <Link
        href="/code-example"
        className={`text-sm font-medium transition-colors hover:text-primary ${
          isSettingsActive ? "text-primary" : ""
        }`}
      >
        Code Examples
      </Link>
    </nav>
  );
}
