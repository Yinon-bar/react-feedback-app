import { useState } from "react";
import "./App.css";
import FeedbackList from "./Components/FeedbackList";

import Header from "./Components/Header";
import Card from "./Components/Shared/Card";
import FeedbackData from "./data/FeedbackData";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <div className="App">
      <Header text="" />
      <div className="container">
        <FeedbackList feedback={feedback} />
      </div>
    </div>
  );
}

export default App;
