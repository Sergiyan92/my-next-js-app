import React from "react";
const fetchPost = async (postId: string) => {
  const post = await fetch(`/api/posts/${postId}`, {
    method: "GET",
  });
  return post.json();
};

export const generateMetadata = async ({ params }: any) => {
  const { post } = await fetchPost(params.id);
  return {
    title: post[0].title,
    description: post[0].description,
    openGraph: {
      title: "Main title",
      description: "Main description of my app",
      url: `/posts/${params.id}`,
      siteName: "Codewithserhii",
      images: [
        {
          url: post.img_url,
          width: 1260,
          height: 800,
        },
      ],
      locale: "en-EN",
    },
  };
};

const PostId = ({ params }: any) => {
  return <div>PostId{params.id}</div>;
};

export default PostId;
