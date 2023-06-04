import Separator from "./sidebar/Separator";
import { ComponentProps } from "@/types/component/component.types";

function ComponentHolder(props: ComponentProps) {
  return (
    <div className="rounded-md bg-[--nav-bg] p-4">
      {props.showHeading && (
        <div className="heading group mb-2">
          <p className="title text-smm text-[--secondary-text]">
            {props.heading}
          </p>

          <Separator />
        </div>
      )}

      <div className="content">{props.children}</div>
    </div>
  );
}

export default ComponentHolder;
