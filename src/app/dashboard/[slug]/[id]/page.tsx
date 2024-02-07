"use client";

interface Props {
  params: {
    slug: string;
    id: string;
  };
}

export default function page({ params }: Props) {
  return (
    <>
      <div> dashboard [slug] : {params.slug}</div>
      <div> dashboard [id] : {params.id}</div>
    </>
  );
}
