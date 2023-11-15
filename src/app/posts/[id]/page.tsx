"use client";

import { useEffect, useState } from "react";
type Post = {
  title?: string;
  description?: string;
};

export default async function PostId({ params }: any) {
  const [post, setPost] = useState<Post | null>(null);

  const getPostById = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/posts/${params.id}`,
        {
          method: "GET",
        }
      );
      if (response) {
        const { post } = await response.json();
        if (post) setPost(post);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPostById();
  }, []);
  return (
    <div>
      {post && <h2>{post.title}</h2>}
      {post && <p>{post.description}</p>}
    </div>
  );
}

// const fetchPost = async (postId: string) => {
//   try {
//     const post = await fetch(`http://localhost:3000/api/posts/${postId}`, {
//       method: "GET",
//     });
//     return post.json();
//   } catch (error) {
//     console.error("Error fetching post:", error);
//     throw error; // Rethrow the error
//   }
// };

// export const generateMetadata = async ({ params }: any) => {
//   console.log("postId:", params.id); // Add this line to check the value
//   const { post } = await fetchPost(params.id);
//   return {
//     title: post?.title,
//     description: post?.description,
//     openGraph: {
//       title: "Main title",
//       description: "Main description of my app",
//       url: `/posts/${params.id}`,
//       siteName: "Codewithserhii",
//       images: [
//         {
//           url: post?.img_url,
//           width: 1260,
//           height: 800,
//         },
//       ],
//       locale: "en-EN",
//     },
//   };
// };
