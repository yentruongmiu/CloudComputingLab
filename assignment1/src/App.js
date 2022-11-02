import { useEffect, useState } from 'react';
import axios from 'axios';
import Constants from './constant';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function getStudents() {
      const result = await axios.get(Constants.awsAPIUrl);
      setStudents(result.data)
    }
    getStudents();
  }, [])
  
  return (
    <div className="App">
      <h1>Student list of Cloud Computing course</h1>
      {
        students && students.length > 0 &&
          students.map((item, idx) => {
            return <div key={idx}>{idx+1}: {item}</div>
          })
      }
    </div>
  );
}

export default App;
