import React, { useEffect, useState } from "react";
import { userlist } from "../ApiService/getaction";
import './mainPage.css';


const MainPage = () =>{
    const[lists , setLists] = useState([]);
    const[loading,setLoading] = useState(true);


    const getData = async () => {
         try {
           const result = await userlist();
           setLists(result);
        }catch (err){
            console.log(err);
        }finally {
           setLoading(false);
        }
    };
    useEffect (() =>{
        getData();
    }, []);

    if (loading){
        return<div> Loading...</div>
    }


    
    return (
       <div>
     <table className="overall">
      <thead>
        <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
      <tbody>
        {lists.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>

       </div>

    );
}
export default MainPage;