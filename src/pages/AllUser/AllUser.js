import React, { useEffect, useState } from 'react';

const AllUser = () => {
    const [data,setData]=useState()
   useEffect(()=>{
    fetch('http://localhost:5000/all-user')
    .then(res => res.json())
    .then(data=>setData(data))
   },[])

   console.log("All Data",data);
    return (
      <div className='-z-10'>
        <div className="overflow-x-auto py-10">
          <table className="table table-compact w-[70%] mx-auto">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
             {
                data?.map((item,index)=>{
                    return(
                        <tr>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.email}</td>
                        <td>{item.password}</td>
                      </tr>
                    )
                })
             }
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default AllUser;