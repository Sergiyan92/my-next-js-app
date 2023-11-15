import { NextResponse } from "next/server";

const posts: any = [
  {
    id: 12,
    title: "Hello Serhii",
    description: "Description of project",
  },
];

export const GET = async (request: Request, context: any) => {
  const { params } = context;
  return NextResponse.json({
    post: posts.find((x: any) => x.id === params.postId),
  });
};
