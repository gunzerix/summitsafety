import React from 'react';
import './NeedInspirationSection.css';
import Container from 'react-bootstrap/Container';

function NeedInspirationSection() {
  return (
    <div className='need-inspiration-section py-5 position-relative'>
        <div className='bg-shape position-absolute'></div>
        <Container>
            <div className="row">
                <div className='col-md-4 z-2'>
                    <h2 className='text-start text-light text-capitalize fw-semibold'>Butuh inspirasi?</h2>
                    <p className='text-start text-light'>Kami memberikan rekomendasi perjalanan anda agar lebih menarik dan seru.</p>
                    <div className='d-flex'>
                        <h5 className='text-light text-capitalize fw-semibold text-nowrap'>Hubungi sekarang:</h5>
                        <a href="/" className='text-light mx-2 text-decoration-none h5 fw-semibold'>0812356749</a>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default NeedInspirationSection;