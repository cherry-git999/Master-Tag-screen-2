import { cn } from "@/lib/utils";
import { SidebarItem } from "@/types";
import { useLocation } from "react-router-dom";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const location = useLocation();
  
  const navigation: SidebarItem[] = [
    { name: "Dashboard", href: "/dashboard", current: false },
    { name: "Tags", href: "/tags", current: true },
    { name: "Reports", href: "/reports", current: false },
    { name: "Projects", href: "/projects", current: false },
    { name: "Mast. Calib. Inst.", href: "/calibration", current: false },
    { name: "MIV", href: "/miv", current: false },
    { name: "Users", href: "/users", current: false },
  ].map(item => ({
    ...item,
    current: location.pathname === item.href
  }));

  return (
    <div className={cn("flex h-full w-56 flex-col bg-[#1e2535] text-white", className)}>
      <div className="flex h-14 items-center border-b border-slate-700 px-4">
        <h2 className="text-base font-medium">Navigation</h2>
      </div>
      <nav className="flex-1 space-y-0.5 px-2 py-3">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={cn(
              item.current
                ? "bg-slate-700 text-white"
                : "text-slate-300 hover:bg-slate-700 hover:text-white",
              "group flex items-center rounded-md px-3 py-1.5 text-sm font-medium"
            )}
            aria-current={item.current ? "page" : undefined}
          >
            {item.name}
          </a>
        ))}
      </nav>
    </div>
  );
}