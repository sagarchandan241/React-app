import React from 'react'
import User from './User';
import UserClass from './UserClass';

const About = () => {
  return (
    <>
    <h2 className='about-us'>About Us page</h2>
    <User name="Sagar Chandan (function)" location="Mumbai Function"/>
    <UserClass name="Sagar Chandan (class)" location = " Mumbai class"/>
    
    </>
  )
}

export default About;