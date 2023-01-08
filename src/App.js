//import logo from './logo.svg';
import './App.css';
import SignIn from './components/SingIn';
import SignUp from './components/SignUp';
import ButtonAppBar from './components/Navbar'
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <ButtonAppBar/>
    <Routes>
      <Route path='/' element={<SignIn/>}/>
      <Route path='/SignUp' element={<SignUp/>} />
    </Routes>
    </BrowserRouter>
    // <div>
      
    //     <SingIn/>  
    //     <SignUp/>
    
    // </div>
  );
}

export default App;
