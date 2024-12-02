import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css'; // Import the CSS file

function AdminDashboard() {
    const [posts, setPosts] = useState([]);

    // Fetch posts from API
    useEffect(() => {
        axios
            .get('http://localhost:5000/posts')
            .then((response) => setPosts(response.data))
            .catch((error) => console.error('Error fetching posts:', error));
    }, []);

    return (
        <div className="dashboard-container">
            <h1 className="dashboard-title">Admin Dashboard</h1>
            <div className="cards-container">
                {posts.map((post) => (
                    <div className="card" key={post._id}>
                        <img
                            src={post.selectedFile || 'https://via.placeholder.com/400x180'}
                            alt={post.title}
                            className="card-image"
                        />
                        <div className="card-content">
                            <h2 className="card-title">{post.title}</h2>
                            <p className="card-detail">
                                <strong>Creator:</strong> {post.creator}
                            </p>
                            <p className="card-detail">
                                <strong>Email:</strong> {post.email}
                            </p>
                            <p className="card-detail">
                                <strong>Address:</strong> {post.address}
                            </p>
                            <p className="card-content-text">{post.content}</p>
                            <div className="card-tags">
                                {post.tags.map((tag, index) => (
                                    <span className="tag" key={index}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <p className="card-detail">
                                <strong>Priority:</strong> {post.priority} |{' '}
                                <strong>State:</strong> {post.state}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AdminDashboard;
