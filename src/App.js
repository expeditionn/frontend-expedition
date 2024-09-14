import './App.css';
import Navbar from './components/Navbar';
import MainHomeContent from './components/HomepageMain';
import WhyYouNeed from './components/Whyyouneed';
import Footer from './components/Footer';
import { Route, BrowserRouter as Router, Routes, Outlet } from 'react-router-dom';
import SignUpForm from './components/SignUpForm';
import Tickets from './components/Tickets';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <>
            <Navbar />
            <MainHomeContent />
            <WhyYouNeed />
            <Footer />
            <Outlet />
          </>
        }></Route>
        <Route path='/signup' element={
          <>
            <SignUpForm />
          </>
        }></Route>
        <Route path='/signup' element={
          <>
            <SignUpForm />
          </>
        }></Route>
        <Route path='/delhi/tickets' element={
          <>
            <Tickets />
          </>
        }></Route>
      </Routes>
    </Router>
  );
}

export default App;