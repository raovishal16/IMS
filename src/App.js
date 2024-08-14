import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
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
import { useSelector } from 'react-redux';
import { persistor } from './Store';
import { PersistGate } from 'redux-persist/integration/react';
import Branch from './Components/Branch/Branch';
import ViewBranch from './Components/Branch/ViewBranch';
import Role from './Components/Role/Role';
import ViewRole from './Components/Role/ViewRole';
import Inq from './Components/Inq/Inq';
import ViewInq from './Components/Inq/ViewInq';
import Ref from './Components/Ref/Ref';
import ViewRef from './Components/Ref/ViewRef';
import Status from './Components/Status/Status';
import ViewSataus from './Components/Status/ViewSataus';

function App() {
  let auth = useSelector((state) => state.register.isAuthenticated);

  console.log(auth, '+++++');

  return (
    <>
      <PersistGate loading={null} persistor={persistor}>
        {auth && <Header />}
        <Routes>
          {!auth ? (
            <>
              <Route path='/' element={<Register />} />
              <Route path='/login' element={<Login />} />
            </>
          ) : (
            <>
              <Route path='/' element={<Dashboard />} />
              <Route path='/user/adduser' element={<AddUser />} />
              <Route path='/user/viewuser' element={<ViewUser />} />
              <Route path='/manageCource/addcource' element={<AddCourse />} />
              <Route path='/manageCource/viewcource' element={<ViewCourse />} />
              <Route path='/courceContent/addcource' element={<AddCourseConten />} />
              <Route path='/courceContent/viewcource' element={<ViewCourseContent />} />
              <Route path='/admission/addstudent' element={<AddStudent />} />
              <Route path='branch/addbranch' element={<Branch />} />
              <Route path='branch/viewbranch' element={<ViewBranch />} />
              <Route path='role/addrole' element={<Role />} />
              <Route path='role/viewrole' element={<ViewRole />} />
              <Route path='inq/addinq' element={<Inq />} />
              <Route path='inq/viewinq' element={<ViewInq />} />
              <Route path='ref/addref' element={<Ref />} />
              <Route path='ref/viewref' element={<ViewRef />} />
              <Route path='status/addstatus' element={<Status />} />
              <Route path='status/viewstatus' element={<ViewSataus />} />
              
            </>
          )}
        </Routes>
      </PersistGate>
    </>
  );
}

export default App;
