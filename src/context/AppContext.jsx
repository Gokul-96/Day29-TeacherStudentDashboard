import React, { createContext, useState,useContext} from 'react'

//create context
const AppContext = createContext({});

//export context and with children props for wrap and render child component

export const AppContextProvider =({children}) =>{

  const [edittea, setEdittea] = useState([])
  const [editstu, setEditstu] = useState([])

  const [student, addStudent] = useState([
    {
      id: 1,
      name: "Gokul",
      fathername: "murugesan",
      class: "I",
      address: "Erode",
      teacher: "kavitha",
    },
  ]);

  const [teacher, addTeacher] = useState([
    {
      id: 1,
      name: "kavitha",
      master: "Transducer",
      address: "coimbatore",
    },
  ]);


  const [style, setStyle] = useState(
    "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
  );

  const Changestyle = () => {
    if (
      style === "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    ) {
      setStyle(
        "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled"
      );
    } else {
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    }
  };
  const Changestyle1 = () => {
    if (
      style === "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    ) {
      setStyle(
        "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled1"
      );
    } else {
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    }
  };

return(
    // double curly braces - for to specify empty object initial value of context
    <AppContext.Provider value={{ 
        style,Changestyle,Changestyle1,
        student,addStudent,
        editstu,setEditstu,
        teacher,addTeacher,
        edittea,setEdittea}}>

{children}
    </AppContext.Provider>
);};

//custom hook to use context
const useAppContext = () => {
  return useContext(AppContext);
};

export default AppContext