
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Posts from "./pages/Posts";
import PostEditor from "./pages/PostEditor";
import Media from "./pages/Media";
import Newsletter from "./pages/Newsletter";
import Pages from "./pages/Pages";
import PageBuilder from "./pages/PageBuilder";
import Settings from "./pages/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Index />} />
          
          {/* Admin routes */}
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/posts" element={<Posts />} />
          <Route path="/admin/posts/new" element={<PostEditor />} />
          <Route path="/admin/posts/edit/:id" element={<PostEditor />} />
          <Route path="/admin/media" element={<Media />} />
          <Route path="/admin/newsletter" element={<Newsletter />} />
          <Route path="/admin/pages" element={<Pages />} />
          <Route path="/admin/pages/new" element={<PageBuilder />} />
          <Route path="/admin/pages/edit/:id" element={<PageBuilder />} />
          <Route path="/admin/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

