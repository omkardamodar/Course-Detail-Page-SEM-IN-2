import { Routes, Route } from 'react-router-dom';
import CourseList from './pages/CourseList.jsx';
import CourseDetail from './pages/CourseDetail.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<CourseList />} />
      <Route path="/course/:name" element={<CourseDetail />} />
    </Routes>
  );
}
