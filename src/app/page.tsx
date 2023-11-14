import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Page",
  description: "",
};

export default function Home() {
  return (
    <div>
      <Header name={"Serhii"} age={30} isMan={true}>
        <p>A message from Home</p>
      </Header>
    </div>
  );
}
