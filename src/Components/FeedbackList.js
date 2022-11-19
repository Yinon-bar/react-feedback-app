import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackContext from "../Context/FeedbackContext";
import { useContext } from "react";

function FeedbackList({ handleDelete }) {
  const feedBackArray = useContext(FeedbackContext);

  if (!feedBackArray || feedBackArray.length === 0) {
    return <h3>There is no feedback to show</h3>;
  }

  // גרסה עם אנימציה
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedBackArray.map((feedBackArray) => (
          <motion.div
            key={feedBackArray.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={feedBackArray.id}
              data={feedBackArray}
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
