import { useState } from "react";
import Button from "./Shared/Button";
import Card from "./Shared/Card";

function FeedbackForm() {
  const [text, setText] = useState("");

  const inputHandler = (event) => {
    // setText()
    setText(event.target.value);
  };

  return (
    <Card>
      <form>
        <h2>How Would You Rate Your Service With Us?</h2>
        <div className="input-group">
          <input
            onChange={inputHandler}
            value={text}
            type="text"
            placeholder="Write a Review"
          />
          <Button type="submit">Send</Button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
