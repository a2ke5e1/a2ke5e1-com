import { SVGProps } from 'react';


declare module "react" {
  interface SVGProps<T> extends React.SVGProps<SVGSVGElement> {
    slot?: string;
    viewBox?: string;
  }
}
