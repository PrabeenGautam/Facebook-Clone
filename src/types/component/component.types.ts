import { ReactNode } from "react";

interface ComponentHolder {
  children: ReactNode;
  showHeading?: false;
}

interface ComponentHeading {
  children: ReactNode;
  showHeading: true;
  heading: string;
}

export type ComponentProps = ComponentHolder | ComponentHeading;
