import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useEffect, useState } from "react";
import Index from "../pages/Index";
import Map from "../pages/Map";
import Add from "../pages/Add";


function Main(props) {
  
  // const [fridge, setFridge] = useState(null);

  // const URL = "http://localhost:8000/";

  //   const getFridges = async () => {
  //     const response = await fetch(URL);
  //     const data = await response.json();
  //     setFridge(data);
  //   };

  //   const createFridges = async (fridge) => {
  //     await fetch(URL, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "Application/json",
  //       },
  //       body: JSON.stringify(fridge),
  //     });

  //     getFridges();
  //   };

  //   const updateFridges = async (fridge, id) => {

  //     await fetch(URL + id, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "Application/json",
  //       },
  //       body: JSON.stringify(fridge),
  //     });

  //     getFridges();
  //   };

  //   const deleteFridges = async (id) => {

  //     await fetch(URL + id, {
  //       method: "DELETE",
  //     });

  //     getPersons();
  //   };

  //   useEffect(() => getPersons(), []);

  return (
    <main>
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Index />} />
            <Route path="map" element={<Map />} />
            <Route path="add" element={<Add />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
  //           path="/:id"
  //           render={(rp) => (
  //             <Show fridge={fridge} updateFridges={updateFrdiges} deleteFridges={deleteFridges} {...rp} />
  //           )}
  //         />
  //         <Route path="/add">
  //           <Add person={person} createPersons={createPersons} />
  //         </Route>
  //       </Switch>
  //     </main>
  //   );
}

export default Main;
