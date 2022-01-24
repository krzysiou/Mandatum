import { deleteCookie } from "./cookies";

//user type
export type UserData = {
  id: string,
  username: string,
  friends:string[],
  pinned:string[],
  recent:string[]
};

//redirect to url
export function redirect(str: string) {
  return () => window.location.href = str;
}

//logout
export function logoutUser(func:(state:boolean)=>void){
  return () => {
    deleteCookie('accessToken');
    func(false);
  }
}