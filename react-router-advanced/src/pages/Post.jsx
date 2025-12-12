import { useParams } from "react-router-dom";

export default function Post() {
  const { postId } = useParams();

  return (
    <div>
      <h1>Blog Post #{postId}</h1>
      <p>This is a dynamic route example.</p>
    </div>
  );
}
