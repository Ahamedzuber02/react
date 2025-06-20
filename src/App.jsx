import "./bootstrap-5.3.5-dist/css/bootstrap.min.css"
import Ahamed_react from "./Ahamed"
import Demo_1 from "./CSS_import/Demo1"
import First from "./first"
import Quiz_app from "./CSS_import/quiz"
import StateFun from "./usestate/State"
import Home_work from "./usestate/hwork"
import Effect from "./useEffect/Effect"
import Cachehook from "./usememo&usecallback/Cachehook"
import Parent from "./usecontext/Parent"
import Reduce from "./usereducer/Reduce"
import Next_work from "./usereducer/hwork2"
import Layout from "./uselayouteffect/Layout"
import Form from "./ReactForm/Form"
import Basic from "./ReactForm/Formik"
import Mapfun from "./mapfunction/MapFun"
import ParentProps from "./Props/ParentProps"
import Create from "./Crud/Create"
import Todolist from "./Crud/hworkcrud"
import { Route, Routes } from "react-router-dom"
import Home_1 from "./Task/Home"
import About_2 from "./Task/About"
import Contact_3 from "./Task/Contact"
import Logo_4 from "./Task/Logo"
import Allinone from "./Task/Allinone"
import Demoredux from "./Redux/Demoredux"
function App() {

  return (
    <>
     {/* <h1>
      Hello welcome to React js
     </h1> */}

     {/* <Ahamed_react /> */}
     {/* <First/> */}

     {/* <Demo_1 /> */}
     {/* <StateFun /> */}
     {/* <Quiz_app/> */}
     {/* <Home_work/> */}
     {/* <Effect /> */}
     {/* <Cachehook /> */}
     {/* <Parent /> */}
     {/* <Reduce /> */}
     {/* <Next_work/> */}
     {/* <Layout /> */}
     {/* <Form /> */}
     {/* <Basic /> */}
     {/* <Mapfun /> */}
     {/* <ParentProps /> */}
     {/* <Create /> */}
     {/* <Todolist/> */}
     {/* <Home_1/> */}
     {/* <About_2/> */}
     {/* <Contact_3/> */}
     {/* <Logo_4/> */}
     {/* <Allinone/> */}
     <Demoredux />
     <Routes>
      <Route index element ={<Allinone />}/>
      <Route path="zuber" element={<Demo_1 />}/>
      <Route path="hook">
        <Route path="state" element={<StateFun />}/>
        <Route path="context" element={<Parent />}/>
      </Route>
      <Route path="reducer" element={<Next_work/>}/>
      <Route path="Task">
        <Route path="home" element={<Home_1/>}/>
        <Route path="about" element={<About_2/>}/>
        <Route path="contact" element={<Contact_3/>}/>
        <Route path="logo" element={<Logo_4/>}/>
      </Route>
     </Routes>
    </>
  )
}

export default App
