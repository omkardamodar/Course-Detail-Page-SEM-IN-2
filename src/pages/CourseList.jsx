import { Link } from 'react-router-dom';
import { courses } from '../data/courses.js';

export default function CourseList() {
  return (
    <div>
      <h1>Courses</h1>
      <ul>
        {courses.map((course) => (
          <li key={course}>
            <Link to={`/course/${encodeURIComponent(course)}`}>
              {course}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
