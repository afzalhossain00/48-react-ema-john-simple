import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const About = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <h2>sectect about us</h2>
            <h3>Auth Context are cool!!!</h3>
        </div>
    );
};

export default About;