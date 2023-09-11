
import './App.css';
// import Home from './Home';
import LoginButton from './LoginButton';
import HomeFunction from './HomeFunction';
import LoginFunction from './LoginFunction';
import Employee from './Employee';
import User from './User';
import Input from './Input';
import Student from './Student';
import StudentList from './StudentList';
import EventHandling from './EventHandling';
import StudentForm from './StudentForm';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Pages/Home"
import Aboutus from './Pages/Aboutus';
import Contactus from './Pages/Contactus';
import Header from './Pages/Header';
import Course from './Pages/Course';
import Counter from './Pages/Counter';
import LifeCycleExample from './Pages/LifeCycleExample';
import Users from './Pages/Users';
import CounterFunction from './Pages/CounterFunction';
import AllHooks from './hooks/AllHooks';

function App() {
  return (
   <div className='container'>
    {/* <h1>hello react app</h1> */}
    {/* <Home/>
    <Home/>
    <Home/> */}
    {/* <LoginButton/>
    <LoginButton/>
    <HomeFunction/>
    <LoginFunction/> */}
    {/* <Employee/>
    <Employee/>
    <User/> */}
    {/* <Input type="text" placeholder="enter first name"/> */}
    {/* <Student/> */}
    {/* <StudentList/> */}
    {/* <EventHandling/> */}
    {/* <StudentForm/> */}

    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/aboutus" element={<Aboutus/>}></Route>
      <Route path="/contactus" element={<Contactus/>}></Route>
      <Route path="/course" element={<Course/>}></Route>
      <Route path="/counter" element={<Counter/>}></Route>
      <Route path="/lifecycleexample" element={<LifeCycleExample/>}></Route>
      <Route path="/users" element={<Users/>}></Route>
      <Route path="/counterfunction" element={<CounterFunction/>}></Route>
      <Route path="/allhooks" element={<AllHooks/>}></Route>
    </Routes>
    </BrowserRouter>
    {/* <LifeCycleExample age={20}/> */}

   </div>
  );
}

export default App;
