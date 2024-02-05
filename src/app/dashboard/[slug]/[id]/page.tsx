"use client";

interface Props {
  params: {
    slug: string;
    id: string;
  };
}

export default function page({ params }: Props) {
  console.log("params in [id]: ", params);
  return <div>{JSON.stringify(params)}</div>;
}
