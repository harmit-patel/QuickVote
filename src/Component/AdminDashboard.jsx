import React from 'react';
import logo from '../Assets/user.png';
import data from '../Json/adminData.json'; 
import '../Design/AdminDashboard.css';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    const { createdSurveys, admin } = data;

    return (
        <div className="dashboard">
            <aside className="sidebar">
                <div className="brand">
                    <img src={logo} alt="Admin logo" className="userlogo" width="150" height="150" />
                    <div className="user-info">
                        <p className="email">{admin.email}</p>
                        <p className="role">Role: {admin.role}</p>
                    </div>
                </div>
            </aside>
            <main className="main-content">
                <section className="dashboard-section">
                    <h1>Admin Dashboard</h1>
                    <div className="stats">
                        <div className="create-option">
                            <h2>Create Poll</h2>
                            <Link to="/pollcomponent">
                            <button className="create-button">Create Poll</button>
                            </Link>
                            
                        </div>
                        <div className="create-option">
                            <h2>Create Survey</h2>
                            <Link to="/surveycomponent">
                            <button className="create-button">Create Survey</button></Link>
                        </div>
                    </div>
                </section>
                <section className="created-surveys">
                    <h2>Previously Created Surveys</h2>
                    <div className="survey-grid">
                        {createdSurveys.length > 0 ? (
                            createdSurveys.map((survey, index) => (
                                <div key={index} className="survey-card">
                                    <h4 className="survey-title">{survey.name}</h4>
                                    <p>ID: {survey.id}</p>
                                    <small>Created on: {survey.createdDate}</small>
                                </div>
                            ))
                        ) : (
                            <p>No surveys created.</p>
                        )}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default AdminDashboard;
