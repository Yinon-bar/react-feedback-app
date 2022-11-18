import { Link } from "react-router-dom";
import Card from "../Shared/Card";

function About() {
  return (
    <div className="container">
      <Card>
        <div className="about">
          <h1>About This Project</h1>
          <p>
            This project is a part of React Full-stack course by Brad Traversy
          </p>
          <p>version: 1.2.6</p>
          <p>
            <Link to={"/"}>Back To Home</Link>
          </p>
        </div>
      </Card>
    </div>
  );
}

export default About;
