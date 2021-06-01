import React from "react";

class Intro extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to the React Challenge!</h1>
        <p>
          In this challenge you are asked to build a calendar app. This app has
          the following requirements:
        </p>
        <ul>
          <li>
            Each square in the calendar is programmatically generated w/ the
            following info in it (3rd party library may be used to style/layout)
            <ul>
              <li>Day</li>
              <li>Number of tasks in the center of the square</li>
            </ul>
          </li>
          <li>
            Use state management (either Redux or useContext) to pass tasks down
            to the calendar
          </li>
          <li>
            When the date is clicked on, a modal should pop us using data from
            state management to load tasks
          </li>
          <li>Unit tests should be added to cover functionality</li>
        </ul>
      </div>
    );
  }
}
export default Intro;
