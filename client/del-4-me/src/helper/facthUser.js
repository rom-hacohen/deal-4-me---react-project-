import React, { useEffect ,useState } from "react";
import { getItemFromLocalStorage } from "./localStorageManage";


const useFecthUser = () => {
  const [data, setData] = useState(null);
  const URL = "http://localhost:3009";

  const Token = getItemFromLocalStorage("token");
  const ID = getItemFromLocalStorage("User")
    useEffect(async () => {
      await fetch(`${URL}/users/${ID.UserId}`)
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => {
          console.error("There was an error!", error);
        });
    }, []);
    
    if (Token) {
      return data
    }
    else localStorage.clear()
    
};
export default useFecthUser;
