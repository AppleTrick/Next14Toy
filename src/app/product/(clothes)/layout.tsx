import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function ProductClothesLayout(props: Props) {
  return (
    <div>
      <h2 style={{ color: "skyblue" }}>Product Clothes Layout</h2>
      <div>{props.children}</div>
    </div>
  );
}
