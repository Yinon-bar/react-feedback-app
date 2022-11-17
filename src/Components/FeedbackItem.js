// import { useState } from "react";
import Card from "./Shared/Card";

function FeedbackItem({ data }) {
  // const [rating, setRating] = useState(8);
  // const [text, setText] = useState("This is an example of a feedback item");

  // const handleClick = () => {
  //   setRating((prev) => {
  //     return prev + 1;
  //   });
  // };

  return (
    <Card className="card">
      <div className="num-display">{data.rating}</div>
      {/* <button onClick={handleClick} className="close">
        <FaTimes color="purple" />
      </button> */}
      <div className="text-display">{data.text}</div>
      {/* <button onClick={handleClick}>Send</button> */}
    </Card>
  );
}

Card.defaultProps = {
  reverse: false,
};

export default FeedbackItem;
