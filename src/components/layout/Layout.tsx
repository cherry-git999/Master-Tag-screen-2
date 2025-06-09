import { PropsWithChildren } from "react";
import { Sidebar } from "./Sidebar";

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex h-screen w-full">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <main className="h-full p-0">{children}</main>
      </div>
    </div>
  );
}