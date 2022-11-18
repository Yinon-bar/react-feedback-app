import { useState } from "react";
import "./App.css";
import FeedbackForm from "./Components/FeedbackForm";
import FeedbackList from "./Components/FeedbackList";
import Header from "./Components/Header";
import FeedbackData from "./data/FeedbackData";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <div className="App">
      <Header text="" />
      <div className="container">
        <FeedbackForm />
        <FeedbackList feedback={feedback} />
      </div>
    </div>
  );
}

export default App;
