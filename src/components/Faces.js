import React from "react";
import "./Faces.css";
import { useState, useEffect } from "react";

const Faces = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("https://reqres.in/api/users?page=2");
        const json = await response.json();
        setUsers(json.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchUsers();
  }, []);

  return (
    <div className="faces">
      {users.map((user) => (
        <div key={user.id} className="Movie">
          <p>
            {user.first_name} {user.last_name}
          </p>
          <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
        </div>
      ))}
    </div>
  );
};

export default Faces;
