export type Posts = {
  id: number;
  title: string;
  body: string;
};
export type Func = {
  (posts: Posts[]): Posts[];
};
