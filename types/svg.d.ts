declare module "*.svg" {
    import * as React from "react";
    export const ReactComponent: React.FC<
      React.SVGProps<SVGSVGElement> & { title?: string }
    >;
    const src: string;
    export default src;
}

declare module "*.mp4" { const src: string; export default src; }

// Additional image type declarations not covered by Next's defaults
declare module "*.JPG" { const src: string; export default src; }
declare module "*.HEIC" { const src: string; export default src; }