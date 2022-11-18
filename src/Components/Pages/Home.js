import React from "react";
import FeedbackForm from "../../Components/FeedbackForm";
import FeedbackList from "../../Components/FeedbackList";
import FeedbackStats from "../../Components/FeedbackStats";
import FeedbackData from "../../data/FeedbackData";
import Header from "../../Components/Header";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../../index.css";
import AboutIconLink from "../AboutIconLink";

function Home() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <div className="App">
      <Header text="" />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
      <AboutIconLink />
    </div>
  );
}

export default Home;
