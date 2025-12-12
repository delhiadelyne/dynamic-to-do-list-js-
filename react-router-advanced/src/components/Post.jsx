import { useParams } from "react-router-dom";

export default function Post() {
  const { id } = useParams();

  return (
    <div>
      <h2>Viewing Post ID: {id}</h2>
      <p>This is dynamic routing in action!</p>
    </div>
  );
}
