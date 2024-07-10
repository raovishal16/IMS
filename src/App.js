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
            </>
          )}
        </Routes>
      </PersistGate>
    </>
  );
}

export default App;
