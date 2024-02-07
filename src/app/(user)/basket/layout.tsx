import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function BasketLayout(props: Props) {
  return <>{props.children}</>;
}
