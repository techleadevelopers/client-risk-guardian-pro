import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import NotFound from "@/pages/not-found";
import Dashboard from "@/pages/Dashboard";
import ContentList from "@/pages/ContentList";
import AuditLogs from "@/pages/AuditLogs";
import Compliance from "@/pages/Compliance";
import ViralityMap from "@/pages/ViralityMap";
import Settings from "@/pages/Settings";
import Developer from "@/pages/Developer";
import Billing from "@/pages/Billing";
import Integrations from "@/pages/Integrations";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/content" component={ContentList} />
      <Route path="/audit" component={AuditLogs} />
      <Route path="/compliance" component={Compliance} />
      <Route path="/models" component={ViralityMap} />
      <Route path="/settings" component={Settings} />
      <Route path="/developer" component={Developer} />
      <Route path="/billing" component={Billing} />
      <Route path="/integrations" component={Integrations} />

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="risk-guardian-theme">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
