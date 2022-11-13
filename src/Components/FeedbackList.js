import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback }) {
  console.log(feedback);

  if (!feedback || feedback.length === 0) {
    return <h3>There is no feedback to show</h3>;
  }

  return (
    <div>
      <FeedbackItem />
    </div>
  );
}

export default FeedbackList;
