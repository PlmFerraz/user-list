import "./App.css";
import Card from "./components/card/Card";
import useUser from "./hooks/useUser";

export default function App() {
  const { users } = useUser();
  return (
    <ul>
      {users.map((user) => {
        return <Card user={user} />;
      })}
    </ul>
  );
}
