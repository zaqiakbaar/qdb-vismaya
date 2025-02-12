import { IBlogListResponse } from "../../../../api/types/blog/blog";

export interface IDisplayBlogInfo {
    blogData?:Partial<IBlogListResponse>
}