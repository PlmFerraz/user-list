import { useEffect, useState } from "react";
import { getAllUsers } from "../services/service";

export default function useUser() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function loadUsers() {
      const data = await getAllUsers();
      setUsers(data);
    }
    loadUsers();
  }, []);
  return {
    users,
  };
}
