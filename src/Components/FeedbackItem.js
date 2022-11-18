import Card from "./Shared/Card";
import { FaTimes } from "react-icons/fa";

function FeedbackItem({ data, handleDelete }) {
  return (
    <Card className="card">
      <div className="num-display">{data.rating}</div>
      <button onClick={() => handleDelete(data.id)} className="close">
        <FaTimes color="purple" />
      </button>{" "}
      <div className="text-display">{data.text}</div>
    </Card>
  );
}

Card.defaultProps = {
  reverse: false,
};

export default FeedbackItem;
