import React from 'react';
import profileImage from '../../images/rm.jpg';
import '../../styles/About.css';


export default function About() {
    return (
        <div className='aboutDiv'>
            <div>
                <img className='profile-pic' src={profileImage} alt="profileImage" height={300}/>
                <p>Rua Manukau - Head Developer</p>
            </div>
            <div className='about-content'>
                <h2>@RM Web Development</h2>
                <p className='description'>
                   My name is Rua Manukau and I am the head developer @RM Web Devepolments. I am a Graduate of Trilogy's full stack coding bootcamp through Monash University, Melbourne. I have professional experience in sales and marketing, and have worked in many different trade industries in various roles. I am passionate about user experience!! I enjoy the process of designing the look and layout of a clients website that they want achieve, then creating easy functionality of the appilcation for users. 
                </p>
            </div>
        </div>
    );
}
