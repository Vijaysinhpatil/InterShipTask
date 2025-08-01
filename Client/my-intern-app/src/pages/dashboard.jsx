import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import './dashboard.css'; // Import the CSS file

const Dashboard = () => {
    const navigate = useNavigate();
  const [internData, setInternData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:4004/api/intern')
      .then((res) => {
        setInternData(res.data);
      })
      .catch((err) => {
        console.log("Error =>", err);
      });
  }, []);

  if (!internData)
    return <div className="loading">Loading..!</div>;
  const handleLogin = (e) => {
    e.preventDefault();
    // No auth logic, just redirect
    navigate("/leaderboard");
  }; 
  return (
    <div className="dashboard">
      <h2>Welcome, {internData.name}</h2>
      <p>Referral Code: <strong>{internData.referralCode}</strong></p>
      <p>Total Donations: ₹{internData.donationsRaised}</p>

      <h3>🏆 Rewards</h3>
      <ul>
        <li>₹500 - Custom Badge</li>
        <li>₹1000 - Appreciation Certificate</li>
        <li>₹1500 - Exclusive Mentorship Call</li>
      </ul>
          
            <button class="button" onClick={handleLogin}>
            <div class="button-outer">
                <div class="button-inner">
                <span>LeaderBoard</span>
                </div>
            </div>
            </button>

    </div>
  );
};

export default Dashboard;