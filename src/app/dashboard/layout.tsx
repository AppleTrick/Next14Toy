import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ProductLayout = (props: Props) => {
  return (
    <div>
      <h1>DashBoard Layout</h1>
      <div>{props.children}</div>
    </div>
  );
};

export default ProductLayout;
