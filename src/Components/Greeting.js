import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting } from '../Redux/greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting.value);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return (
    <div className="greeting_div">
      <h1 className="heading">Refresh the page to view the same greeting in different languages</h1>
      {/* <ul className="list">
        {greeting.map((greeting) => (
          <li className="list_item" key={greeting.id}>{greeting.greeting}</li>
        ))}
      </ul> */}
    </div>
  )
}

export default Greeting;