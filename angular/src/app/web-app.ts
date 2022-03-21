import {AppComment} from "./app-comment";
import {User} from "./user";

export interface WebApp {
  id: number;
  name : string;
  rating: number;
  comments : AppComment[];
  creator : User;
}
