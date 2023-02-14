export const getRole = async (email) => {
    const url = `http://localhost:5000/user/${email}`;
  
    const response = await fetch(
      `http://localhost:5000/user/${email}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",     
        },
      }
    );
  
    const user = await response.json();
    console.log("User Role Func ", user);
    return user;
  };