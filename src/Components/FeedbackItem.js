import { useState } from "react";

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
      <div className="text-display">{data.text}</div>
      <button onClick={handleClick}>Send</button>
    </div>
  );
}

export default FeedbackItem;
