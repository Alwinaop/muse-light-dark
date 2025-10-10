import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/components/ThemeProvider";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Set page title for 404
    document.title = "404 - Page Not Found | Ashwin Systems";
  }, [location.pathname]);

  return (
    <ThemeProvider defaultTheme="light">
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="text-center max-w-md">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
            <AlertCircle className="w-10 h-10 text-primary" />
          </div>
          <h1 className="mb-4 text-6xl font-heading font-bold text-secondary dark:text-foreground">404</h1>
          <p className="mb-2 text-2xl font-semibold text-secondary dark:text-foreground">Page Not Found</p>
          <p className="mb-8 text-base text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/">
            <Button className="gradient-primary shadow-glow transition-smooth">
              <Home className="w-4 h-4 mr-2" />
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default NotFound;
