/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface DemoEventEmitter {}
  interface DemoPassingProps {
    'action': Function;
    'text': string;
  }
  interface DemoRichProps {
    'list': Array<string>;
  }
}

declare global {


  interface HTMLDemoEventEmitterElement extends Components.DemoEventEmitter, HTMLStencilElement {}
  var HTMLDemoEventEmitterElement: {
    prototype: HTMLDemoEventEmitterElement;
    new (): HTMLDemoEventEmitterElement;
  };

  interface HTMLDemoPassingPropsElement extends Components.DemoPassingProps, HTMLStencilElement {}
  var HTMLDemoPassingPropsElement: {
    prototype: HTMLDemoPassingPropsElement;
    new (): HTMLDemoPassingPropsElement;
  };

  interface HTMLDemoRichPropsElement extends Components.DemoRichProps, HTMLStencilElement {}
  var HTMLDemoRichPropsElement: {
    prototype: HTMLDemoRichPropsElement;
    new (): HTMLDemoRichPropsElement;
  };
  interface HTMLElementTagNameMap {
    'demo-event-emitter': HTMLDemoEventEmitterElement;
    'demo-passing-props': HTMLDemoPassingPropsElement;
    'demo-rich-props': HTMLDemoRichPropsElement;
  }
}

declare namespace LocalJSX {
  interface DemoEventEmitter extends JSXBase.HTMLAttributes<HTMLDemoEventEmitterElement> {
    'onDemoEvent'?: (event: CustomEvent<any>) => void;
  }
  interface DemoPassingProps extends JSXBase.HTMLAttributes<HTMLDemoPassingPropsElement> {
    'action'?: Function;
    'text'?: string;
  }
  interface DemoRichProps extends JSXBase.HTMLAttributes<HTMLDemoRichPropsElement> {
    'list'?: Array<string>;
  }

  interface IntrinsicElements {
    'demo-event-emitter': DemoEventEmitter;
    'demo-passing-props': DemoPassingProps;
    'demo-rich-props': DemoRichProps;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


