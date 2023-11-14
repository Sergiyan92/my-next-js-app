"use client";
import { useParams } from "next/navigation";

const PostIdPage = () => {
  const params = useParams();
  console.log(params.id);
  console.log(params.postid);
  return <div>My Post Id Page</div>;
};

export default PostIdPage;
