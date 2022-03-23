import { deepClone } from "utils/Util";
import { blogs, tags } from "_database_/blog-entity"

export const BlogRepository = {

  fetchAllTags: () => {
    return deepClone(tags);
  },

  fetchAllBlogs: () => {
    return deepClone(blogs);
  }
  
}