
export type APIMessages = {
  [code: string]: {
    key: string;
    message: string;
    type: string;
  };
};

export interface Option {
  label: string;
  value: number | string;
}