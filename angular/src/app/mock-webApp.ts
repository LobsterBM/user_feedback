import {WebApp} from "./web-app";
import {User} from "./user";
import {AppComment} from "./app-comment";

export const MOCKUSER: User = {
  id : 1 ,
  username:  "user1"
} ;

export const MOCKCOMMENT: AppComment[] =[
  {id : 1 , user: MOCKUSER , text: 'this is a mock comment' , appRating : 2 , commentRating : 1 },
  {id : 2 , user: MOCKUSER , text: 'this is another mock comment' , appRating : 3, commentRating : 1 },
];

export const WEBAPPS : WebApp[] = [
    {id: 1 , name: 'app1' , rating: 1 , comments: MOCKCOMMENT , creator: MOCKUSER  },
    {id: 2 , name: 'app2' , rating: 3 , comments: MOCKCOMMENT , creator: MOCKUSER  },
];

