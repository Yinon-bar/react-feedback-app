import "./App.css";

import Routing from "./Components/Routing/Routing";
import FeedbackContext from "./Context/FeedbackContext";

function App() {
  return (
    <FeedbackContext.Provider>
      <Routing />
    </FeedbackContext.Provider>
  );
}

export default App;
