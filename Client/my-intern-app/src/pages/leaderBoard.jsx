import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './LeaderBoard.css';

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4004/api/leaderboard')
      .then(res => setLeaders(res.data));
  }, []);

  return (
    <div className="leaderboard">
      <h2>🏆 Leaderboard</h2>
      <ol>
        {leaders.map((intern, i) => (
          <li key={i} style={{ animationDelay: `${i * 0.1}s` }}>
            <span>{intern.name}</span>
            <span>₹{intern.donationsRaised.toLocaleString()}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Leaderboard;