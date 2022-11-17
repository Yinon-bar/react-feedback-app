import { useState } from "react";
<<<<<<< HEAD
import Card from "./Shared/Card";
=======
import { FaTimes } from "react-icons/fa";
>>>>>>> 3b2ba6f1b6824bfb4d0a665bcb84b8d71ba635f5

function FeedbackItem({ data }) {
  // const [rating, setRating] = useState(8);
  // const [text, setText] = useState("This is an example of a feedback item");

  // const handleClick = () => {
  //   setRating((prev) => {
  //     return prev + 1;
  //   });
  // };

  return (
    <Card reverse={false} className="card">
      <div className="num-display">{data.rating}</div>
      <button onClick={handleClick} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{data.text}</div>
<<<<<<< HEAD
      {/* <button onClick={handleClick}>Send</button> */}
    </Card>
=======
    </div>
>>>>>>> 3b2ba6f1b6824bfb4d0a665bcb84b8d71ba635f5
  );
}

export default FeedbackItem;
