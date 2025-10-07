import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import SiteHeader from "@/components/site-header";
import Footer from "@/components/footer";
import Home from "@/pages/home";
import ComponentsShowcase from "@/pages/components-showcase";
import CodeExample from "@/pages/code-example";
import PollingDemo from "@/pages/polling-demo";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/components" component={ComponentsShowcase} />
      <Route path="/code-example" component={CodeExample} />
      <Route path="/polling-demo" component={PollingDemo} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen flex flex-col">
          <SiteHeader />
          <Toaster />
          <Router />
          <Footer />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
