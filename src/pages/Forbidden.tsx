import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Forbidden = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("403 Error: User attempted to access forbidden resource:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="text-8xl font-bold text-destructive mb-4">403</h1>
        <h2 className="text-3xl font-semibold text-foreground mb-4">Access Forbidden</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          You don't have permission to access this resource.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default Forbidden;