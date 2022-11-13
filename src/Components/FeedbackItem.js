import { useState } from "react";
import { FaTimes } from "react-icons/fa";

function FeedbackItem({ data }) {
  const [rating, setRating] = useState(8);
  const [text, setText] = useState("This is an example of a feedback item");

  const handleClick = () => {
    setRating((prev) => {
      return prev + 1;
    });
  };

  return (
    <div className="card">
      <div className="num-display">{data.rating}</div>
      <button onClick={handleClick} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{data.text}</div>
    </div>
  );
}

export default FeedbackItem;
