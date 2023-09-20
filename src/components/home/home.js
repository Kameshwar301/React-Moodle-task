import React from 'react';
import { Menu } from '../menu';
function Home(){
return(
    <>
    <Menu/>
    <div className='homeBackground'>
    <h1>Hello World</h1>
    <h1 className='firstTitle'>Congratulations</h1>
        <div className='firstImage'>
            <div className='imageone'>
            <img src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png' className='firstPicture'/>
            <h1 className='imageName'>Kiran V</h1>
            <p>Vishnu Institute of Computer Education and Technology, Bhimavaram</p>
            <img src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png'/>
            </div>
        </div>
    </div>
    </>
);
}
export default Home;