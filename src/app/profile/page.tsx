"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
const ProfilePage = () => {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h1>My list of Profile</h1>
      <div>
        <Link href="/profile/1">Profile 1</Link>
        <Link href="/profile/2">Profile 2</Link>
        <Link href="/profile/3">Profile 3</Link>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://github.com/Sergiyan92"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProfilePage;
