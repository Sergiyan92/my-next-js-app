import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Home Page",
  description: "",
};

export default function Home() {
  return (
    <div>
      <h1>Main page</h1>
    </div>
  );
}
