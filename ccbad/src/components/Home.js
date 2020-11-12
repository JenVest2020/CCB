import React from 'react';
import { Link } from 'react-router-dom';

import Johnny1 from '../images/Johnny1.jpg';
import Allen2 from '../images/Allen at AmVets.png';
import LogoOval from '../images/LogoDesign2Oval.png';
const Home = () => {

    const Johnny = Johnny1;
    const Allen = Allen2;
    const Logo1 = LogoOval;

    return (
        <div>
            <section className='home'>
                <Link href='#' className='link'>You Tube</Link>
                <img src={Logo1} alt='band logo oval shaped with mountains and green pasture as background musical note as the b letter in boys' style={{ width: '15%' }}></img>
                <Link href='#' className='link2'>FaceBook</Link>
                <h1 style={{ fontSize: '2rem' }}>
                    WELCOME
                </h1>


            </section>
            <section className='top-home'>
                <h2 style={{ fontSize: '2rem' }}>Classic Country Boys</h2>
            </section>
            <section style={{ display: 'flex', justifyContent: 'center' }}>
                <div>
                    <h2 >Johnny Lindsey</h2>
                    <img src={Johnny} alt='lead singer Johnny sitting at the microphone and playing his guitar' style={{ width: '100%' }} />
                </div>
                <div>
                    <h2 className='h2'>Come See Us</h2>
                    <h3 style={{ textDecoration: 'underline' }}>Locations & Times</h3>
                    <div >
                        {/* <div className='location-block'>
                            <p>Fridays 4pm to 7pm</p>
                            <p style={{ fontWeight: 'bold' }}>Elk's Lodge</p>
                            <span>300 S. Main St</span>
                            <span>De Soto, MO 63020</span>
                            <a href='www.melbatheater.com'>Melba Theater website</a>
                        </div> */}
                        <div className='location-block'>
                            <p>CANCELED by Covid</p>
                            <p style={{ fontWeight: 'bold' }}> The Melba Theater</p>
                            <span>300 S. Main St</span>
                            <br></br><span>De Soto, MO 63020</span>
                            <p>Saturday Nov. 14, 5:30pm</p>
                            <a href='https://www.melbatheater.com/'>Melba Theater website</a>
                        </div>

                    </div>
                    <h2>Contact Us</h2>
                    <p> Allen Vest ph# (573)210-2934</p>
                    <p>Johnny Lindsey ph# (314)309-4433</p>
                </div>
                <div>
                    <h2 >Allen Vest</h2>
                    <img src={Allen} alt='lead guitarist Allen standing at microphone and tuning his guitar' style={{ width: '100%' }} />
                </div>
            </section>



        </div>
    );
};

export default Home;