/* eslint-disable */

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreetingsAsync } from '../redux/greetings/greetings';

const Greeting = () => {
  const { greetings } = useSelector((state) => state.greetings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreetingsAsync());
  }, []);

  return (
    <div>
      <div className="card mt-5 me-5 ms-5">
        <div className="card-body">
          {greetings.message}
        </div>
      </div>
    </div>
  );
};

export default Greeting;
