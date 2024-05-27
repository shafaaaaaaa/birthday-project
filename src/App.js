// import Home from './Pages/Home';
// import Confirm from './Pages/Confirm';
// import React, { useState, useEffect } from 'react';
// import { ColorRing } from 'react-loader-spinner';
// import './App.css';




// function App() {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 3000); 
//     return () => clearTimeout(timer); 
//   }, []);


//   return (
  
//     <div className="App">
//       {isLoading ? (
//         <div className="loading-container">
//           <ColorRing
//             height="100"
//             width="100"
//             color="#264e70"
//             ariaLabel="color-ring-loading"
//           />
//         </div>
//       ) : (
//         <Home />
//       )}
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Confirm from './Pages/Confirm';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/birthday-project" element={<Confirm />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

