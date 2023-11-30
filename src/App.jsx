import { useEffect, useState } from "react";
import "./App.css";
import Loader from "./loder/Loder";
import Bar from "./components/Navbar";


function App() {
  // loader state
  const [isLoading, setIsLoading] = useState(true);

  // Let create async method to fetch fake data
  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    };

    fakeDataFetch();
  }, []);

  return isLoading ? (
    <Loader/>
  ) : (
  <Bar/>
  );
}

export default App;