import React from 'react';
import logo from '../Assets/user.png';
import data from '../Json/data.json'; 
import '../Design/Dashboard.css';

// Helper function to format time difference
const getTimeLeft = (endTime) => {
    const now = new Date();
    const targetTime = new Date(endTime);
    const diffMs = targetTime - now;

    if (diffMs <= 0) return "Time Over"; // Survey has ended

    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

    return `${days}d ${hours}h ${minutes}m`;
};

const Dashboard = () => {
    const { surveys, email } = data;
    const currentTime = new Date(); // Get the current laptop time

    // Categorize surveys
    const ongoingSurveys = surveys.filter(survey => new Date(survey.endTime) > currentTime);
    const previousSurveys = surveys.filter(survey => new Date(survey.endTime) <= currentTime);

    return (
        <div className="dashboard">
            <aside className="sidebar">
                <div className="brand">
                    <img src={logo} alt="User logo" className="userlogo" width="150" height="150" />
                    <div className="user-info">
                        <p className="email">{email}</p>
                    </div>
                </div>
            </aside>
            <main className="main-content">
                {/* Ongoing Surveys Section */}
                <section className="dashboard-section">
                    <h1>Ongoing Live Poll/Survey</h1>
                    <div className="stats">
                        {ongoingSurveys.length > 0 ? (
                            ongoingSurveys.map((survey) => (
                                <div key={survey.id} className="earnings">
                                    <h2>{survey.title}</h2>
                                    <p>Time Left: {getTimeLeft(survey.endTime)}</p>
                                    <p>ID: {survey.id}</p>
                                </div>
                            ))
                        ) : (
                            <p>No ongoing surveys.</p>
                        )}
                    </div>
                </section>

                {/* Previous Surveys Section */}
                <section className="survey-list">
                    <h2>Previous Surveys</h2>
                    {previousSurveys.length > 0 ? (
                        <ul>
                            {previousSurveys.map((survey) => (
                                <li key={survey.id}>
                                    <span>{survey.title}</span>
                                    
                                    <span>{survey.id}</span>
                                    <span>Ended</span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No previous surveys available.</p>
                    )}
                </section>
            </main>
        </div>
    );
};

export default Dashboard;
