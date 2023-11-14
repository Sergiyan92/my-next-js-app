import Header from "@/components/Header";
import type { Metadata } from "next";
import Image from "next/image";
import img from "../../public/img.jpg";
export const metadata: Metadata = {
  title: "Home Page",
  description: "",
};

export default function Home() {
  return (
    <div>
      <Header name={"Serhii"} age={30} isMan={true}>
        <div className="w-[500px]">
          <Image src={img} alt="img" />
        </div>

        <p>A message from Home</p>
      </Header>
    </div>
  );
}
