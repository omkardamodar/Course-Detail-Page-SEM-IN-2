import { useParams, Link } from 'react-router-dom';

export default function CourseDetail() {
  // Reads the :name part of the URL, e.g. /course/React%20Basics
  const { name } = useParams();

  return (
    <div>
      <Link to="/">← Back to courses</Link>
      <h1>{name}</h1>
      <p>You are viewing the course: {name}</p>
    </div>
  );
}
