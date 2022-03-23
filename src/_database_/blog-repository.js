import { deepClone } from "utils/Util";
import { blogs, tags } from "_database_/blog-entity"

export const BlogRepository = {

  fetchAllTags: () => {
    return deepClone(tags);
  },

  fetchAllBlogs: () => {
    return deepClone(blogs);
  },

  fetchBlogById: (id) => {
    const post = deepClone(blogs[id]);
    post.tags = post.tags.map(tagId => {
      const { name, tagStyles } = deepClone(tags)[tagId];
      return { name, tagStyles };
    });
    return post;
  }
  
}