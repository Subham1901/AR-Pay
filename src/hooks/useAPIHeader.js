import { auth } from "../../firebase.config";
export const useAPIHeaders = () => {
  const token = JSON.parse(localStorage.getItem("token"))?.accessToken;
  if (token) return { authorization: token };
  if (auth?.currentUser?.accessToken)
    return { authorization: auth?.currentUser?.accessToken };
};
