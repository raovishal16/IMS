import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import AddUser from './Components/ManageUser/AddUser';
import ViewUser from './Components/ManageUser/ViewUser';
import AddCourse from './Components/ManageCourse/AddCourse';
import ViewCourse from './Components/ManageCourse/ViewCourse';
import AddCourseConten from './Components/CourseContaent/AddCourseConten';
import ViewCourseContent from './Components/CourseContaent/ViewCourseContent';
import AddStudent from './Components/Admission/AddStudent';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
function App() {
  return (
    <>
      <Header />
      <Register/>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/user/adduser' element={<AddUser />} />
        <Route path='/user/viewuser' element={<ViewUser />} />
        <Route path='/manageCource/addcource' element={<AddCourse />} />
        <Route path='/manageCource/viewcource' element={<ViewCourse />} />
        <Route path='/courceContent/addcource' element={<AddCourseConten />} />
        <Route path='/courceContent/viewcource' element={<ViewCourseContent />} />
        <Route path='/admission/addstudent' element={<AddStudent />} />
        <Route path='/' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
