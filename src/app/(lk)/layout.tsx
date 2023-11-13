import type { PropsWithChildren } from "react";

export default function DashbordLayout({
  children,
}: PropsWithChildren<unknown>) {
  return (
    <div>
      <h1>DashBord</h1>
      {children}
    </div>
  );
}
