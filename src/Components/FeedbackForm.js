import { useState } from "react";
import RatingSelect from "./RatingSelect";
import Button from "./Shared/Button";
import Card from "./Shared/Card";

function FeedbackForm({ handleAdd }) {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setbtnDisabled] = useState(true);
  const [msg, setMsg] = useState("");

  const inputHandler = (event) => {
    if (text.length === "") {
      setbtnDisabled(true);
      setMsg(null);
    } else if (text.length >= 0 && text.length < 10) {
      setbtnDisabled(true);
      setMsg("Your feedback must have 10 or more characters");
    } else {
      setMsg(null);
      setbtnDisabled(false);
    }
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      handleAdd(newFeedback);
      setText("");
      setRating(0);
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How Would You Rate Your Service With Us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={inputHandler}
            value={text}
            type="text"
            placeholder="Write a Review"
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>

        {msg && <div className="message">{msg}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
