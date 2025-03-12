import logo from './logo.svg';
import Header from './components/Header';
import DayList from './components/DayList';
import Day from './components/Day';
import EmptyPage from './components/EmptyPage';
import CreateWords from './components/CreateWords';
import CreateDays from './components/CreateDays'; 
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <div className='App'>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Navigate to="/React_VocaBoost" replace />} />
                        <Route path="/React_VocaBoost" element={<DayList />} />
                        <Route path="/day/:day" element={<Day />} />
                        <Route path="*" element={<EmptyPage />} />
                        <Route path="/create_words" element={<CreateWords />} />
                        <Route path="/create_day" element={<CreateDays />} />                 
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}