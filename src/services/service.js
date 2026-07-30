import { getUsers } from "../api/api";

export async function getAllUsers() {
  const data = await getUsers();
  return data;
}
