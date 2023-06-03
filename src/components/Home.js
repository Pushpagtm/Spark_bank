import React from 'react';
import '../styles/home.css';
function Home(props) {
    return (
        <div>
        <div className='container'>
        <div className="left">
                <div className="title">
                    <h2>The Spark Bank Limited</h2>
                </div>
                <div className="desc">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi debitis quia cumque possimus, doloremque quaerat! Perferendis et eveniet, praesentium mollitia aliquam dolore placeat dolores architecto assumenda veritatis at laboriosam soluta debitis tempora.</p>
                </div>
                <button className='start-btn'>
                    <a href="/customer">
                        Get Started
                    </a>
                </button>
            </div>
            
            


        </div>
            
        </div>
    );
}

export default Home;