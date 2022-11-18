import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback, handleDelete }) {
  console.log(feedback);

  if (!feedback || feedback.length === 0) {
    return <h3>There is no feedback to show</h3>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((feedObj) => (
        <FeedbackItem
          key={feedObj.id}
          data={feedObj}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default FeedbackList;
