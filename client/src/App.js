import "./Assets/App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { baseURL, config } from "./services";
import Plays from "./Screens/Plays";
import Form from "./Screens/Form";
import Main from "./Screens/Main";
import Layout from "./Components/Layout";

function App() {
  const [plays, setPlays] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const getPlays = async () => {
      const resp = await axios.get(baseURL, config);
      console.log(resp.data.records);
      setPlays(resp.data.records);
    };

    getPlays();
  }, [toggleFetch]);

  return (
    <div>

      <div className="app-background">
        

     <Layout>
        <div className="container1">
        <Routes>
          <Route path="/" element={<Main />} />

          <Route
            path="/form"
            element={
              <Form setToggleFetch={setToggleFetch} toggleFetch={toggleFetch} />
            }
            />


          <Route
            path="/plays"
            element={
              <Plays
              plays={plays}
              setToggleFetch={setToggleFetch}
              toggleFetch={toggleFetch}
              />
            }
            />
        </Routes>
            </div>
            </Layout>
      </div>
    </div>
  );

  console.log("ENV TEST:", process.env.REACT_APP_AIRTABLE_APP);
  console.log("Base URL:", baseURL);
console.log("Base ID:", process.env.REACT_APP_AIRTABLE_APP);
console.log("API Key:", process.env.REACT_APP_AIRTABLE_KEY);


}

export default App;
