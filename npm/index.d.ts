declare module '@apiverve/grammarcheck' {
  export interface grammarcheckOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface grammarcheckResponse {
    status: string;
    error: string | null;
    data: GrammarCheckData;
    code?: number;
  }


  interface GrammarCheckData {
      modified: boolean;
      text:     string;
  }

  export default class grammarcheckWrapper {
    constructor(options: grammarcheckOptions);

    execute(callback: (error: any, data: grammarcheckResponse | null) => void): Promise<grammarcheckResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: grammarcheckResponse | null) => void): Promise<grammarcheckResponse>;
    execute(query?: Record<string, any>): Promise<grammarcheckResponse>;
  }
}
