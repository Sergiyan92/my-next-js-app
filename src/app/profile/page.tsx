"use client";
import { useRouter } from "next/navigation";
const ProfilePage = () => {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h1>My list of Profile</h1>
      <div>
        <ul>
          <li onClick={() => router.push("/profile/1")}>Profile 1</li>
          <li onClick={() => router.push("/profile/2")}>Profile 2</li>
          <li onClick={() => router.push("/profile/3")}>Profile 3</li>
        </ul>
      </div>
    </div>
  );
};

export default ProfilePage;
