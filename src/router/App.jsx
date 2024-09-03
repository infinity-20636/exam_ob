import { Routes, Route } from "react-router-dom"
import { Suspense } from "react";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import Header from "../components/Header/Header";
import '../assets/global/global.scss'
import TaskAdd from "../pages/TaskAdd/TaskAdd";


const App = () => {
  return (
    <>
      <Suspense fallback={<span>Loading...</span>}>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/shop" element={<Shop/>}></Route>
          <Route path="/add" element={<TaskAdd/>}></Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
