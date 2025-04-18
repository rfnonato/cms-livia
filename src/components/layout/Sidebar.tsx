
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  FileText,
  Video,
  Mail,
  FileEdit,
  Settings,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  href: string;
  active?: boolean;
}

const SidebarItem = ({ icon: Icon, label, href, active }: SidebarItemProps) => {
  return (
    <Link
      to={href}
      className={cn(
        "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-all hover:text-primary",
        active ? "bg-accent text-primary" : "text-muted-foreground"
      )}
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
    </Link>
  );
};

export function Sidebar() {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-4 z-20 -mr-4 h-8 w-8 rounded-full border-gray-200 lg:hidden"
        onClick={toggleSidebar}
      >
        {collapsed ? <Menu className="h-4 w-4" /> : <X className="h-4 w-4" />}
      </Button>
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-10 flex w-64 flex-col border-r bg-background transition-all duration-300 lg:static",
          collapsed && "-translate-x-full lg:translate-x-0 lg:w-20"
        )}
      >
        <div className="flex h-14 items-center border-b px-4">
          <Link to="/admin" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold">CM</span>
            </div>
            {!collapsed && <span className="font-bold">ContentMinimal</span>}
          </Link>
        </div>
        <nav className="flex-1 space-y-1 p-4">
          <SidebarItem
            icon={LayoutDashboard}
            label="Dashboard"
            href="/admin"
            active={location.pathname === "/admin"}
          />
          <SidebarItem
            icon={FileText}
            label="Posts"
            href="/admin/posts"
            active={location.pathname.startsWith("/admin/posts")}
          />
          <SidebarItem
            icon={Video}
            label="Media"
            href="/admin/media"
            active={location.pathname.startsWith("/admin/media")}
          />
          <SidebarItem
            icon={Mail}
            label="Newsletter"
            href="/admin/newsletter"
            active={location.pathname.startsWith("/admin/newsletter")}
          />
          <SidebarItem
            icon={FileEdit}
            label="Pages"
            href="/admin/pages"
            active={location.pathname.startsWith("/admin/pages")}
          />
          <SidebarItem
            icon={Settings}
            label="Settings"
            href="/admin/settings"
            active={location.pathname.startsWith("/admin/settings")}
          />
        </nav>
        <div className="border-t p-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-primary font-medium text-sm">UI</span>
            </div>
            {!collapsed && (
              <div className="flex flex-col">
                <span className="text-sm font-medium">User Influencer</span>
                <span className="text-xs text-muted-foreground">Admin</span>
              </div>
            )}
          </div>
        </div>
      </aside>
    </div>
  );
}

