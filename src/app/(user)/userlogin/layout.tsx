import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function LoginLayout(props: Props) {
  return <>{props.children}</>;
}
