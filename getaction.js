import axios from "axios";
import {getUrl} from "./endpoints";

export const userlist = async () => {
    try {
      const response = await axios.get(`${getUrl.userList}`);
      if (response && response?.data){
      console.log("Full user list :" , response)
      return response.data;
      }
    } catch (err){
       console.log("Error in the userlist :",err) 
    }
}