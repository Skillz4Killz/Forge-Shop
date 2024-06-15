import { PropsWithChildren } from "react";

export default function WorkerPackageImage(props: PropsWithChildren) {
  return (
    <div className="flex justify-center items-center">{props.children}</div>
  );
}
