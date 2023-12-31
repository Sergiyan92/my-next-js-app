"use client";
import { toast } from "sonner";
import { userStore } from "@/store/user";
// import Header from "@/components/Header";
// import type { Metadata } from "next";
// import Image from "next/image";
// import img from "../../public/img.jpg";
import { useAppContext } from "@/context";
// import { useState } from "react";
// export const metadata: Metadata = {
//   title: "Main title",
//   description: "Main description of my app",
//   openGraph: {
//     title: "Main title",
//     description: "Main description of my app",
//     url: "mywebsite.com",
//     siteName: "Codewithserhii",
//     images: [
//       {
//         url: "/mywebsite.png",
//         width: 1260,
//         height: 800,
//       },
//     ],
//     locale: "en-EN",
//   },
// };
export default function Home() {
  const user = userStore((state: any) => state.user);
  const updateUser = userStore((state: any) => state.updateUser);
  const sub = userStore.subscribe(console.log);
  sub();
  // const { name, setName } = useAppContext();
  // const [loading, setLoading] = useState(false);
  // const fetchDataFromApi = async () => {
  //   try {
  //     setLoading(true);
  //     const response = await fetch("/api/users", {
  //       headers: {
  //         Accept: "application/json",
  //         method: "GET",
  //       },
  //     });
  //     if (response) {
  //       const data = await response.json();
  //       console.log(data);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  return (
    <div className=" flex gap-2 m-4">
      <p>{user.full_name}</p>
      <input
        className="border"
        type="text"
        onChange={(e: any) => {
          updateUser({
            full_name: e.target.value,
          });
        }}
      />
      {/* <span>{name}</span>
      <button onClick={() => setName("Anton")}>Change name</button> */}
      {/* <button
        className="px-4 py-2 font-bold text-white bg-blue-500"
        onClick={() => fetchDataFromApi()}
      >
        {loading ? "Loading..." : "Call my API"}
      </button> */}
      {/* <Header name={"Serhii"} age={30} isMan={true}>
        <div className="w-[500px]">
          <Image src={img} alt="img" />
        </div>

        <p>A message from Home</p>
      </Header>
      <h1>Hello kitti</h1>
      <h2>Congrats World</h2> */}
      {/* <button
        onClick={() => toast.error("My first toast")}
        className="px-5 py-3 text-white bg-yellow-500 rounded"
      >
        Notify me!
      </button> */}
    </div>
  );
}
