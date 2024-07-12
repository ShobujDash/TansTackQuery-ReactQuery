import { useQuery } from "@tanstack/react-query";
import From from "./components/From";

function App() {
   const { data ,status,isFetching} = useQuery({
     queryKey: ["todo"],
     queryFn: async () =>
       await (await fetch("http://localhost:8000/todo")).json(),
   });

  console.log("Data", data)
  if (isFetching) {
    return <h1>Loading</h1>
  }

  return (
    <>
      <From />
      <p>Status:{status}</p>
      {
        data && data.data && data.data.map((todo) => <li key={todo.id}>{ todo.title}</li> )
      }
    </>
  );
}

export default App;
