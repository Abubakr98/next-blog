import { Posts } from "../interfaces/index";
export type posts = Posts[];
export default {
  state: [],
  reducers: {
    setPosts: (state: posts, payload: posts) => {
      console.log(state);
      return payload;
    },
  },
};
