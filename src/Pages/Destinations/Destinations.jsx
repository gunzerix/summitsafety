import React from 'react';
import './Destinations.css';
import SecondHeroSection from '../../Components/SecondHeroSection/SecondHeroSection';
import EuropeDestinationsSection from '../../Components/DestinationsSection/EuropeDestinationsSection';
import HolidayPlanSection from '../../Components/HolidayPlanSection/HolidayPlanSection';
import AsiaDestinationsSection from '../../Components/DestinationsSection/AsiaDestinationsSection';
import NeedInspirationsSection from '../../Components/NeedInspiration/NeedInspirationSection';
import AfricaDestinationsSection from '../../Components/DestinationsSection/AfricaDestinationsSection';
import RecommendedSection from '../../Components/RecommendedSection/RecommendedSection';

function Destinations() {
  return (
    <div className='destinations-page'>
      <SecondHeroSection secondHeroTitle='Destinasi yang indah' />
      <EuropeDestinationsSection />
      <HolidayPlanSection itemHolidayPlanTitle='Temukan Perjalanan Indahmu.' />
      <AsiaDestinationsSection />
      <NeedInspirationsSection />
      <AfricaDestinationsSection />
      <div className='mt-4 mt-sm-5'>
        <RecommendedSection itemRecommendedTitle='Liburan impian Anda.' />
      </div>
    </div>
  )
}

export default Destinations;