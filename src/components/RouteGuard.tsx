"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { routes, protectedRoutes } from "@/app/resources";
import { Flex, Spinner, Input, Button, Heading, Column, PasswordInput } from "@/once-ui/components";
import NotFound from "@/app/not-found";

interface RouteGuardProps {
  children: React.ReactNode;
}

const RouteGuard: React.FC<RouteGuardProps> = ({ children }) => {
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [isAuthCheckLoading, setIsAuthCheckLoading] = useState(true);

  // Synchronous checks
  const checkRouteEnabled = () => {
    if (!pathname) return false;
    if (pathname in routes) {
      return routes[pathname as keyof typeof routes];
    }
    const dynamicRoutes = ["/blog", "/work"] as const;
    for (const route of dynamicRoutes) {
      if (pathname?.startsWith(route) && routes[route]) {
        return true;
      }
    }
    return false;
  };

  const isRouteEnabled = checkRouteEnabled();
  const isPasswordRequired = !!protectedRoutes[pathname as keyof typeof protectedRoutes];

  useEffect(() => {
    const checkAuth = async () => {
      // Only check auth if password is required
      if (isPasswordRequired) {
        setIsAuthCheckLoading(true);
        try {
          const response = await fetch("/api/check-auth");
          if (response.ok) {
            setIsAuthenticated(true);
          }
        } catch (error) {
          console.error("Auth check failed", error);
        } finally {
          setIsAuthCheckLoading(false);
        }
      } else {
        // If not required, we are "done" loading (conceptually, though we don't block render)
        setIsAuthCheckLoading(false);
      }
    };

    checkAuth();
  }, [pathname, isPasswordRequired]);

  const handlePasswordSubmit = async () => {
    const response = await fetch("/api/authenticate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: (document.getElementById("password") as HTMLInputElement).value }),
      // Optimized state access or use a ref/state if needed, assuming simple usage for now.
      // Actually reusing the existing logic is better, let's keep the user provided code structure but cleaner.
    });

    if (response.ok) {
      setIsAuthenticated(true);
      setError(undefined);
    } else {
      setError("Incorrect password");
    }
  };

  // Only for password handling input state
  const [password, setPassword] = useState("");

  if (!isRouteEnabled) {
    return <NotFound />;
  }

  if (isPasswordRequired && isAuthCheckLoading) {
    return (
      <Flex fillWidth paddingY="128" horizontal="center">
        <Spinner />
      </Flex>
    );
  }

  if (isPasswordRequired && !isAuthenticated) {
    return (
      <Column paddingY="128" maxWidth={24} gap="24" center>
        <Heading align="center" wrap="balance">
          This page is password protected
        </Heading>
        <Column fillWidth gap="8" horizontal="center">
          <PasswordInput
            id="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            errorMessage={error}
          />
          <Button onClick={() => handlePasswordSubmit()}>Submit</Button>
        </Column>
      </Column>
    );
  }

  return <>{children}</>;
};

export { RouteGuard };
