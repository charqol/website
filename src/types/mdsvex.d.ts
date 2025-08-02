declare module 'mdsvex' {
  export interface MdsvexCompileOptions {
    extensions?: string[];
    [key: string]: any;
  }

  export function compile(
    content: string, 
    options?: MdsvexCompileOptions
  ): Promise<{
    code: string;
    data?: Record<string, any>;
    [key: string]: any;
  } | null>;
} 