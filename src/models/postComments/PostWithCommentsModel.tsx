import {IPostModel} from "../post/IPostModel";
import {ICommentModel} from "../comments/ICommentModel";

export type PostWithCommentsModel = IPostModel & {comments:ICommentModel[]};
