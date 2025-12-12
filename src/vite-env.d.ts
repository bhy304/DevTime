declare module "*.svg?react" {
  import React from "react";
  const SVGComponent: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVGComponent;
}

declare module "*.svg?url" {
  const content: string;
  export default content;
}

declare module "*.svg?raw" {
  const content: string;
  export default content;
}
