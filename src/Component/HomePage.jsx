import '../Design/HomePage.css';
import voteImage from '../Assets/ps.png';
import { useEffect } from 'react';
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const HomePage = () => {

    useEffect(() => {
    
        document.body.style.overflow = 'hidden';
    
     
        return () => {
          document.body.style.overflow = 'auto';
        };
      }, []);

  return (
    <div className="homepage" style={{ backgroundColor: '#F5EFE7', minHeight: '100vh' }}>
      <div className="left-section">
      <img
        src={voteImage}
        alt="Vote Icon"
        className="icon"
      />
      </div>
      <div className="right-section">
        <h3>Be a part of decision</h3>
        <h1>Vote Today</h1>
        <div className="buttons">
          <Link id="admin" className="admin-btn" to='/loginparticipant'>Participant</Link>
          <Link id ="participant"className="participant-btn" to="/login">Admin</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
