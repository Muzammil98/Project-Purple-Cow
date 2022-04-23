// * Libraries
import React from "react";
import CountUp from "react-countup";

// * Assets
import "../App.css";

const Counter = ({ currentCount, previousCount }) => {
  const CountAnimated = () => {
    return (
      <CountUp
        start={previousCount}
        end={currentCount}
        duration={1}
        separator=","
        decimal=","
        delay={0}
      >
        {({ countUpRef }) => <span ref={countUpRef} />}
      </CountUp>
    );
  };

  return (
    <h1>
      Count {" "}
      <code>
        <CountAnimated />
      </code>
    </h1>
  );
};

export default Counter;
