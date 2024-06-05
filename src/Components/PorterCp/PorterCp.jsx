import React from 'react';
import './PorterCp.css';
import Container from 'react-bootstrap/Container';
import PorterAsItems from '../../Assets/PorterAsItems';
import PorterCard from './PorterCard';

function PorterCp() {
  return (
    <div className='everyone-holidays-section my-4 my-sm-5'>
        <Container>
            <h2 className='text-uppercase fw-semibold mb-4 mb-sm-5'>Membantu Anda dalam Perjalanan</h2>
            <div className="row g-4">
                {
                    PorterAsItems.map((item) => <PorterCard key={item.id} itemTitle={item.itemTitle} itemSubTitle={item.itemSubTitle} itemPrice={item.itemPrice} />)
                }
            </div>
        </Container>
    </div>
  )
}

export default PorterCp;