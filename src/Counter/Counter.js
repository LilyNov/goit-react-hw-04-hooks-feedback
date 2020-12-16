import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import s from '../Counter/Counter.module.css';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section';

export default function Counter() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodBtn = () => {
    setGood(prevState => prevState + 1);
  };

  const handleNeutralBtn = () => {
    setNeutral(prevState => prevState + 1);
  };

  const handleBadlBtn = () => {
    setBad(prevState => prevState + 1);
  };

  useEffect(() => {
    console.log('go');
    const countTotalFeedback = good + neutral + bad;
    const countPositiveFeedbackPercentage = Math.round(
      (good * 100) / countTotalFeedback,
    );
  }, [good, neutral, bad]);

  return (
    <div className={s.container}>
      <div className="feedback">
        <Section title="Please leave feedback">
          <FeedbackOptions
            onGoodBtn={handleGoodBtn}
            onNeutralBtn={handleNeutralBtn}
            onBadBtn={handleBadlBtn}
          />
        </Section>

        <Section title="Statistics">
          <ul className={s.listStat}>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              percentage={countPositiveFeedbackPercentage}
            />
          </ul>
        </Section>
      </div>
    </div>
  );
}

// Counter.defaultProps = {
//   good: 0,
//   neutral: 0,
//   bad: 0,
// };

// Counter.propTypes = {
//   good: PropTypes.number.isRequired,
//   neutral: PropTypes.number.isRequired,
//   bad: PropTypes.number.isRequired,
// };
