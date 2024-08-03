import { useState, useEffect } from "react";

export default function Users() {
  const [usersList, setusersList] = useState([]);
  const [pending, setPending] = useState(false);

  async function fetchAllUsers() {
    try {
      const apiResponse = await fetch("https://dummyjson.com/users");
      const result = await apiResponse.json();
      console.log(result);
      if (result.users) {
        setusersList(result.users);
        setPending(false);
      } else {
        setusersList([]);
        setPending(false);
      }
    } catch (error) {
      console.log(error);
    }
  }
  function handleFecthListofUsers() {
    fetchAllUsers();
  }
  // useEffect(() => {
  //   fetchAllUsers();
  // }, []);

  console.log(usersList);
  if (pending) return <h1>Fetching users! Please wait</h1>;
  return (
    <div>
      <h1>All Users List</h1>
      <button onClick={handleFecthListofUsers}>Fetch All Users List</button>
      <ul>
        {usersList && usersList.length > 0 ? (
          usersList.map((eachuser) => (
            <li key={eachuser.id}>
              <p>
                {eachuser.firstName} {eachuser.lastName}
              </p>
            </li>
          ))
        ) : (
          <h1>No users found.Please try again</h1>
        )}
      </ul>
    </div>
  );
}
