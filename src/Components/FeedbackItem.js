import { useState } from "react";
import Card from "./Shared/Card";
import { FaTimes } from "react-icons/fa";

function FeedbackItem({ data, handleDelete }) {
  const [rating, setRating] = useState(8);
  // const [text, setText] = useState("This is an example of a feedback item");

  return (
    <Card className="card">
      <div className="num-display">{data.rating}</div>
      <button onClick={() => handleDelete(data.id)} className="close">
        <FaTimes color="purple" />
      </button>{" "}
      <div className="text-display">{data.text}</div>
      <button>Send</button>
    </Card>
  );
}

Card.defaultProps = {
  reverse: false,
};

export default FeedbackItem;
