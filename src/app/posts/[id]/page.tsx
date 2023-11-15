"use client";

// Import required modules
import { useState, useEffect } from "react";

// Define the Post type
type Post = {
  title?: string;
  description?: string;
};

// Component
export default function PostId({ params }: any) {
  const [post, setPost] = useState<Post | null>(null);

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    const getPostById = async () => {
      try {
        // Fetch data from the server
        const response = await fetch(`/api/posts/${params.id}`);
        const data = await response.json();

        // Set the fetched data to the state
        setPost(data.post);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    // Call the function
    getPostById();
  }, [params.id]); // Re-run the effect if params.id changes

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
