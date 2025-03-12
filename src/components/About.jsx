import React from 'react';

const About = () => {
    return (
        <div style={{height: '100vh', marginTop:50}}>
            <img className='border border-2 border-warning rounded-2 w-50 mt-4' src='https://wallpapersmug.com/download/2560x1440/6e645c/captain-marvel-movie-poster.jpg'></img>
            {/* <img className='w-75 mt-2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrciat4veKnwjr78Jgh5a_P0LSww_ouKvSeQ&s'></img> */}
            <h1 className='mt-3'>About Us</h1>
            <p className='mt-2 col-8 mx-auto'>Movie App is a simple application that allows users to search for movies and view details about them. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus itaque sequi neque excepturi sapiente nihil. Quod laborum cupiditate exercitationem amet, maxime non, molestias voluptas quasi maiores obcaecati libero vel expedita.</p>
        
        </div>
    );
}

export default About;
