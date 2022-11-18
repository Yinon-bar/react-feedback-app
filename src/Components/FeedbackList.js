import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";

function FeedbackList({ feedback, handleDelete }) {
  console.log(feedback);

  if (!feedback || feedback.length === 0) {
    return <h3>There is no feedback to show</h3>;
  }

  // גרסה עם אנימציה
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((feedObj) => (
          <motion.div
            key={feedObj.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={feedObj.id}
              data={feedObj}
              handleDelete={handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

  // גרסה ללא אנימציה
  // return (
  //   <div className="feedback-list">
  //     {feedback.map((feedObj) => (
  //       <FeedbackItem
  //         key={feedObj.id}
  //         data={feedObj}
  //         handleDelete={handleDelete}
  //       />
  //     ))}
  //   </div>
  // );
}

export default FeedbackList;
