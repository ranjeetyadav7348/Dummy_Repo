

import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import Browse from './components/Browse/browse';
import Courses from './components/Courses/Dashboard';
import Courseroom from './components/Courses/Classroom';
import CourseAssign from './components/Courses/Assignments';
import Content from './components/Courses/Contents';
import Resources from './components/Resources/Dashboard';
import Forum from './components/Forum/Dashboard';
import Dashboard from './components/Classroom/Dashboard/Dashboard';
import Classroom from './components/Classroom/Classroom';
import ScrollToTop from './components/partials/ScrollToTop/ScrollToTop';
import AssignmentAdmin from './components/Classroom/AssignmentAdmin/AssignmentAdmin';
import StudentSubmission from './components/Classroom/StudentSubmission/StudentSubmission';
import { useDispatch, useSelector } from 'react-redux';
import { AUTOLOGIN, selectUserData } from './reduxSlices/authSlice';
import Reminders from './components/partials/Header/MobileReminder';
import CircularProgress from '@material-ui/core/CircularProgress';
import Combine from './components/VideoResource/Combine';

const App = () => {
  const userData = useSelector(selectUserData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(AUTOLOGIN());
  }, [dispatch]);

  return (
    <div className="app">
      <ScrollToTop>
        {userData.loading ? (
          <div className="col-12 d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
            <CircularProgress size={80} className="display-block" />
          </div>
        ) : userData.token ? (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id" element={<Courseroom />} />
            <Route path="/courses/:id/:tab" element={<Courseroom />} />
            <Route path="/courses/:id/assignment/:assignId/admin" element={<CourseAssign />} />
            <Route path="/courses/:id/content/:contentId/admin" element={<Content />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/content" element={<Combine/>} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/classes" element={<Dashboard />} />
            <Route path="/classes/reminders" element={<Reminders />} />
            <Route path="/classes/:id" element={<Classroom />} />
            <Route path="/classes/:id/:tab" element={<Classroom />} />
            <Route path="/classes/:id/assignment/:assignId/admin" element={<AssignmentAdmin />} />
            <Route path="/classes/:id/assignment/:assignId" element={<StudentSubmission />} />
            <Route
              path="*"
              element={
                <Navigate
                  to="/"
                  replace
                />
              }
            />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<Browse />} />
            <Route
              path="*"
              element={
                <Navigate
                  to="/"
                  replace
                />
              }
            />
          </Routes>
        )}
      </ScrollToTop>
    </div>
  );
};

export default App;


