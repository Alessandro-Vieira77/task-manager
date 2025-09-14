import { useParams } from "react-router-dom";
function PageDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1>PageDetails: {id}</h1>
    </div>
  );
}

export default PageDetails;
