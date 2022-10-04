import logo from './logo.svg';
import './App.css';
import{Routes,Route,BrowserRouter} from "react-router-dom";
import{ToastContainer} from "react-toastify";
import Crud from './crud';
import "react-toastify/dist/ReactToastify.css"
import Update from './crud/update';

function App() {
  return (
   <div className='App'>
    <ToastContainer/>
    <BrowserRouter>
    <Routes>
    <Route  path='/' element={<Crud/>}/>
    <Route  path='/update/:id' element={<Update/>}/>
    </Routes>
    </BrowserRouter>
    
   </div>
  );
}

export default App;
