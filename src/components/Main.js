import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useEffect, useState } from "react";
import Index from "../pages/Index";


function Main(props) {
//   const [fridge, setFridge] = useState(null);

  const URL = "http://localhost:8000/fridges";

  //   const getPersons = async () => {
  //     const response = await fetch(URL);
  //     const data = await response.json();
  //     setPerson(data);
  //   };

  //   const createPersons = async (person) => {
  //     // make post request to create people
  //     await fetch(URL, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "Application/json",
  //       },
  //       body: JSON.stringify(person),
  //     });
  //     // update list of people
  //     getPersons();
  //   };

  //   const updatePersons = async (person, id) => {
  //     // make put request to create people
  //     await fetch(URL + id, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "Application/json",
  //       },
  //       body: JSON.stringify(person),
  //     });
  //     //update list of people
  //     getPersons();
  //   };

  //   const deletePersons = async (id) => {
  //     // make delete request to create people
  //     await fetch(URL + id, {
  //       method: "DELETE",
  //     });
  //     // update list of people
  //     getPersons();
  //   };

  //   useEffect(() => getPersons(), []);

  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </main>
    </Router>
  );
  //           path="/home/:id"
  //           render={(rp) => (
  //             <Show person={person} updatePersons={updatePersons} deletePersons={deletePersons} {...rp} />
  //           )}
  //         />
  //         <Route path="/add">
  //           <Add person={person} createPersons={createPersons} />
  //         </Route>
  //         <Route path="/about">
  //           <About />
  //         </Route>
  //       </Switch>
  //     </main>
  //   );
}

export default Main;