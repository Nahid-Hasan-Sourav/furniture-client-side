export const getRole = async (email) => {
  const url = `https://furniture-server-side-three.vercel.app/user/${email}`;

  const response = await fetch(
    `https://furniture-server-side-three.vercel.app/user/${email}`,
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
