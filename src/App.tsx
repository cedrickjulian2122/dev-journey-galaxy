
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Create a new query client instance
const queryClient = new QueryClient();

// Get the correct basename for GitHub Pages
const getBasename = () => {
  // Check if the URL contains github.io
  const isGitHubPages = window.location.hostname.includes('github.io');
  if (isGitHubPages) {
    // Extract the repository name from the pathname
    const pathSegments = window.location.pathname.split('/');
    // The repository name should be the first non-empty segment
    const repoName = pathSegments.find(segment => segment.length > 0);
    return repoName ? `/${repoName}` : '/';
  }
  return '/';
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={getBasename()}>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
