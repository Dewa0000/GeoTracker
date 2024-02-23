

import React from 'react';
import "./Feature.css";

const FeaturesPage = () => {
    return (
        <div className="features-page">
            <h1>Features</h1>
            <div className="feature">
                <h2>User Authentication</h2>
                <p>
                    Allow users to register, log in, and securely authenticate their identity.
                    Ensure that each user has a unique profile tied to their account.
                </p>
            </div>
            <div className="feature">
                <h2>Real-time Location Tracking</h2>
                <p>
                    Utilize the browser's Geolocation API or a third-party service to capture and display the user's real-time location on a map.
                    Implement an updating mechanism to continuously track and refresh the user's position.
                </p>
            </div>
            <div className="feature">
                <h2>Map Integration with React</h2>
                <p>
                    Integrate a mapping library, such as React Leaflet or Mapbox, to visualize the user's current location in a dynamic map component.
                    Customize the map interface for a smooth and responsive user experience.
                </p>
            </div>
            <div className="feature">
                <h2>Location History and MySQL Database</h2>
                <p>
                    Set up a MySQL database to store the user's location history.
                    Implement a backend (Node.js with Express) to handle data storage and retrieval.
                    Allow users to view their historical location data with timestamps.
                </p>
            </div>
            <div className="feature">
                <h2>User Dashboard with React</h2>
                <p>
                    Create a React-based user dashboard where users can manage their account settings, track preferences, and view location history.
                    Use React Router for seamless navigation within the application.
                </p>
            </div>
            <div className="feature">
                <h2>Notifications and Alerts</h2>
                <p>
                    Implement notifications or alerts for significant location changes, arrivals, or departures.
                    Use React state management to handle and display real-time alerts.
                </p>
            </div>
            <div className="feature">
                <h2>Security and Privacy Measures</h2>
                <p>
                    Implement secure authentication practices using bcrypt for password hashing.
                    Ensure encrypted communication between the client and server.
                </p>
            </div>
            
        </div>
    );
};

export default FeaturesPage;
