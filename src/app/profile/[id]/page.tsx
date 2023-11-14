"use client";
import { useParams, useRouter } from "next/navigation";

const IdPage = () => {
  const params = useParams();
  const router = useRouter();
  return (
    <div>
      <h2>Profile Page id:{params.id}</h2>
      <button onClick={() => router.push("/profile")}>Back to main</button>
    </div>
  );
};

export default IdPage;
