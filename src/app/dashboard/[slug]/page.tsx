"use client";

import { Children, ReactNode } from "react";

interface Props {
  params: {
    slug: string;
  };
}

export default function page(props: Props) {
  console.log(props);
  return <div>dashboard [slug] : {props.params.slug}</div>;
}
