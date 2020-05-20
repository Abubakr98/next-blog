import posts from "./posts";
export interface RootModel {
  posts: typeof posts;
}
export const models: RootModel = { posts };
