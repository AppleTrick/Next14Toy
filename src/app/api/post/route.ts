import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(new NextResponse(JSON.stringify(posts), { status: 200 }));
      }, 500);
    });
  } catch (e) {
    return new NextResponse(null, { status: 500 });
  }
}

export async function HEAD(request: NextRequest) {}

export async function POST(request: NextRequest) {}

export async function PUT(request: NextRequest) {}

export async function DELETE(request: NextRequest) {}

export async function PATCH(request: NextRequest) {}

// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
export async function OPTIONS(request: NextRequest) {}

const posts = [
  {
    id: 1,
    title: "First Post",
    content: "This is the first post.",
    author: "John Doe",
    date: "May 1, 2023",
    comments: [
      { id: 1, text: "Great post!", author: "Jane Smith" },
      { id: 2, text: "I totally agree.", author: "Mike Johnson" },
    ],
  },
  {
    id: 2,
    title: "Second Post",
    content: "This is the second post.",
    author: "Jane Smith",
    date: "May 5, 2023",
    comments: [
      { id: 1, text: "Thanks for sharing!", author: "John Doe" },
      { id: 2, text: "Looking forward to more.", author: "Mike Johnson" },
    ],
  },
  {
    id: 3,
    title: "Third Post",
    content: "This is the third post.",
    author: "Mike Johnson",
    date: "May 10, 2023",
    comments: [
      { id: 1, text: "Amazing content!", author: "Jane Smith" },
      { id: 2, text: "Keep up the good work.", author: "John Doe" },
    ],
  },
  // Add more posts as needed
];
