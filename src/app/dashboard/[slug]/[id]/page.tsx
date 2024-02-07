"use client";

interface Props {
  params: {
    slug: string;
    id: string;
  };
}

export default function page({ params }: Props) {
  console.log("params in [id]: ", params);
  return (
    <>
      <div> dashboard [slug] : {params.slug}</div>
      <div> dashboard [id] : {params.id}</div>
    </>
  );
}
