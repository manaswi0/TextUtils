// //import logo from './logo.svg';
// import './App.css';
// import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
// import React, {useState} from 'react';
// import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link 
// }from 'react-router-dom';


// function App() {
//   const [mode, setMode]=useState(`light`);
//   const toggleFunction=()=>{
//     if (mode==='light'){
//       setMode('dark')
//       document.body.style.backgroundColor='black'
//       showAlert(" Dark Mode has been enabled", "success")
//     }
//     else {
//       setMode('light')
//       document.body.style.backgroundColor='white'
//       showAlert(" Light Mode has been enabled", "success")
//     }
//   }

//   const [alert, setAlert]=useState(null);
//   const showAlert=(msg, type)=>{
//     setAlert({
//       msg: msg,
//       type: type
//     })
//     setTimeout(()=>{
//       setAlert(null);
//     }, 2000);
//   }
//   return (
//     <>
//     <Router>
//       <Navbar title="TextUtils" aboutText="About" mode={mode} toggleFunction={toggleFunction}/> 
//       <Alert alert={alert}/>
//       <div className="container my-3">
//         <Routes>
//           //exact is written becoz react matches partially 
//           <Route exact path="/about" element={<About mode={mode} toggleFunction={toggleFunction}/>}/>   
//           <Route exact path="/" element={<TextForm heading='TextUtils' mode={mode} toggleFunction={toggleFunction} showAlert={showAlert}/>}/>
//         </Routes>
//       </div>
//       </Router>
//     </>
//   );
// }

// export default App;


//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
import About from './components/About';


function App() {
  const [mode, setMode]=useState(`light`);
  const toggleFunction=()=>{
    if (mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='black'
      showAlert(" Dark Mode has been enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert(" Light Mode has been enabled", "success")
    }
  }

  const [alert, setAlert]=useState(null);
  const showAlert=(msg, type)=>{
    setAlert({
      msg: msg,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 2000);
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleFunction={toggleFunction}/> 
      <Alert alert={alert}/>
      <div className="container my-3">
          {/* exact is written becoz react matches partially  */}
          {/* <Route exact path="/about" element={<About mode={mode} toggleFunction={toggleFunction}/>}/>    */}
          <TextForm heading='TextUtils' mode={mode} toggleFunction={toggleFunction} showAlert={showAlert}/>
      </div>
    </>
  );
}

export default App;
