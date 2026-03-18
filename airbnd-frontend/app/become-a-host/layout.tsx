"use client";

import { HostProvider } from "@/context/HostContext";

export default function BecomeAHostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HostProvider>{children}</HostProvider>;
}
