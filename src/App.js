import logo from './logo.svg';
import Header from './components/Header';
import DayList from './components/DayList';
import Day from './components/Day';
import EmptyPage from './components/EmptyPage';

import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <div className='App'>
//           <Header />  
//           <Routes>
//             <Route index  element={<DayList />} />
//             <Route path="/day/:day" element={<Day />} />
//             <Route path="*" element={<EmptyPage />} />
//           </Routes>
//         </div>
//       </BrowserRouter>      
//     </div>
//   );
// }

// export default App;

export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <div className='App'>
                    <Header />
                    <Routes>
                        <Route path="/" element={<DayList />} />
                        <Route path="/day/:day" element={<Day />} />
                        <Route path="*" element={<EmptyPage />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}