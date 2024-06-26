export type item = {
  img: string;
  id: number;
  title: string;
  price: number;
  mark?: string;
  count?: number;
};

export interface Fields {
  name: string;
  tel: string | number;
  mess: string;
}