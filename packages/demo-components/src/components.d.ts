/**
* This is an autogenerated file created by the Stencil compiler.
* It contains typing information for all components that exist in this project.
*/
/* tslint:disable */

import '@stencil/core';




export namespace Components {

  interface DemoEventEmitter {}
  interface DemoEventEmitterAttributes extends StencilHTMLAttributes {
    'onDemoEvent'?: (event: CustomEvent) => void;
  }

  interface DemoPassingProps {
    'action': Function;
    'text': string;
  }
  interface DemoPassingPropsAttributes extends StencilHTMLAttributes {
    'action'?: Function;
    'text'?: string;
  }

  interface DemoRichProps {
    'list': Array<string>;
  }
  interface DemoRichPropsAttributes extends StencilHTMLAttributes {
    'list'?: Array<string>;
  }
}

declare global {
  interface StencilElementInterfaces {
    'DemoEventEmitter': Components.DemoEventEmitter;
    'DemoPassingProps': Components.DemoPassingProps;
    'DemoRichProps': Components.DemoRichProps;
  }

  interface StencilIntrinsicElements {
    'demo-event-emitter': Components.DemoEventEmitterAttributes;
    'demo-passing-props': Components.DemoPassingPropsAttributes;
    'demo-rich-props': Components.DemoRichPropsAttributes;
  }


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
    'demo-event-emitter': HTMLDemoEventEmitterElement
    'demo-passing-props': HTMLDemoPassingPropsElement
    'demo-rich-props': HTMLDemoRichPropsElement
  }

  interface ElementTagNameMap {
    'demo-event-emitter': HTMLDemoEventEmitterElement;
    'demo-passing-props': HTMLDemoPassingPropsElement;
    'demo-rich-props': HTMLDemoRichPropsElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
