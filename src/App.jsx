import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Logoutmodel from "./components/Logoutmodel";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import CreateTeacher from "./components/CreateTeacher";
import CreateStudent from "./components/CreateStudent";
import AddStudent from "./components/AddStudent";
import AddTeacher from "./components/AddTeacher";
import EditTeacher from "./components/EditTeacher";
import EditStudent from "./components/EditStudent";
import { AppContextProvider } from "./context/AppContext";
import './App.css'

function App() {
  return (
    <div id="page-top">
        <AppContextProvider>
        <Router>
        <div id="wrapper" className="">
            <Sidebar
              Link={Link}
            />
              <Navbar />
          
 {/* <!-- Content Wrapper --> */}
 <div id="content-wrapper" className="d-flex flex-column">
              {/* <!-- Main Content -->*/}
              <div id="content" className="#0dcaf0 text-center">
<Routes>
  <Route path ="/" element={<Dashboard />}/>
  <Route path ="/Student" element={<CreateStudent />}/>
  <Route path ="/Student/Add" element={<AddStudent />}/>
  <Route path ="/Student/Edit" element={<EditStudent />}/>
  <Route path ="/Teacher" element={<CreateTeacher />}/>
  <Route path ="/Teacher/Add" element={<AddTeacher />}/>
  <Route path ="/Teacher/Edit" element={<EditTeacher />}/>
</Routes>
</div>
     <Footer />
     </div>
     </div>
     </Router>
     
     <Logoutmodel />
        </AppContextProvider>
     </div>
  );
}

export default App
