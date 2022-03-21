import {User} from "./user";

export interface AppComment {
  id: number;
  user : User;
  text : string;
  appRating : number;
  commentRating : number;
}
