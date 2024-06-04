import React from 'react';
import './HeroSection.css';
import Carousel from 'react-bootstrap/carousel';
import GreenBtn from '../GreenBtn/GreenBtn';

function HeroSection() {
  return (
    <div className='hero-section'>
        <Carousel>
            <Carousel.Item className='carousel-item1 vh-100'>
                <Carousel.Caption className='h-100 d-flex flex-column align-items-center justify-content-top'>
                    <div className="row h-100">
                        <div className='col-lg-6 d-flex flex-column align-items-start justify-content-center'>
                            <h1 className='text-capitalize text-start'>Nikmati perjalanan anda.</h1>
                            <p className='text-start'>Setiap langkah di perjalanan ini adalah sebuah petualangan yang penuh makna. Dengan hati yang berdebar, kami memulai perjalanan menuju destinasi yang tak hanya indah, tetapi juga menyimpan banyak cerita. </p>
                            <GreenBtn btnTitle='Selengkapnya' btnLink='/holidays' />
                        </div>
                        <div className='col-lg-6 d-none d-lg-block'></div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='carousel-item2 vh-100'>
                <Carousel.Caption className='h-100'>
                    <div className="row h-100">
                        <div className='col-lg-6 d-flex flex-column align-items-start justify-content-center'>
                            <h1 className='text-capitalize text-start'>Ciptakan perjalanan Yang indah.</h1>
                            <p className='text-start'>Perjalanan ini bukan sekadar tentang tempat-tempat yang kami kunjungi, tetapi juga tentang pembelajaran dan refleksi diri. Di tengah keheningan alam, kami menemukan kedamaian dan kesempatan untuk merenung tentang arti kehidupan.</p>
                            <GreenBtn btnTitle='Selengkapnya' btnLink='/city-breaks' />
                        </div>
                        <div className='col-lg-6 d-none d-lg-block'></div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='carousel-item3 vh-100'>
                <Carousel.Caption className='h-100'>
                    <div className="row h-100">
                        <div className='col-lg-6 d-none d-lg-block'></div>
                        <div className='col-lg-6 d-flex flex-column align-items-end justify-content-center'>
                            <h1 className='text-capitalize text-start'>Ciptakan kenangan indah.</h1>
                            <p className='text-start'>perjalanan ini mengajarkan kami bahwa hidup adalah sebuah perjalanan yang harus dinikmati setiap momennya. Dengan semangat petualang dan rasa syukur, kami melanjutkan langkah, siap untuk petualangan berikutnya yang menanti di depan.</p>
                            <GreenBtn btnTitle='Selengkapnya' btnLink='/destinations' />
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default HeroSection;