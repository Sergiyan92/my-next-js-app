"use client";
// import Header from "@/components/Header";
import type { Metadata } from "next";
// import Image from "next/image";
// import img from "../../public/img.jpg";
import { useState } from "react";
// export const metadata: Metadata = {
//   title: "Home Page",
//   description: "",
// };

export default function Home() {
  const [loading, setLoading] = useState(false);
  const fetchDataFromApi = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/users", {
        headers: {
          Accept: "application/json",
          method: "GET",
        },
      });
      if (response) {
        const data = await response.json();
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <button
        className="px-4 py-2 font-bold text-white bg-blue-500"
        onClick={() => fetchDataFromApi()}
      >
        {loading ? "Loading..." : "Call my API"}
      </button>
      {/* <Header name={"Serhii"} age={30} isMan={true}>
        <div className="w-[500px]">
          <Image src={img} alt="img" />
        </div>

        <p>A message from Home</p>
      </Header> */}
    </div>
  );
}
