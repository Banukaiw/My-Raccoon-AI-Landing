import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function HomePage() {
  const [data, setData] = useState([]);
  const history = useHistory();
  
  const handleClick = () => {
    fetch('/data.json')
      .then(response => response.json())
      .then(jsonData => {
        // filter the data based on a specific condition
        const filteredData = jsonData.filter(item => item.category === 'books');
        setData(filteredData);
        history.push('/data'); // navigate to the DataPage component
      })
      .catch(error => console.error(error));
  }

  return (
    <div>
      <button onClick={handleClick}>Get Data</button>
    </div>
  );
}

export default HomePage;