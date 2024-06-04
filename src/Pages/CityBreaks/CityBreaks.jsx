import React from 'react';
import './CityBreaks.css';
import SecondHeroSection from '../../Components/SecondHeroSection/SecondHeroSection';
import AmsterdamCityBreaksSection from '../../Components/CityBreaksSection/AmsterdamCityBreaksSection';
import HolidayPlanSection from '../../Components/HolidayPlanSection/HolidayPlanSection';
import LondonCityBreaksSection from '../../Components/CityBreaksSection/LondonCityBreaksSection';
import RecommendedSection from '../../Components/RecommendedSection/RecommendedSection';
import ParisCityBreaksSection from '../../Components/CityBreaksSection/ParisCityBreaksSection';
import NeedInspirationSection from '../../Components/NeedInspiration/NeedInspirationSection';

function CityBreaks() {
  return (
    <div className='city-breaks-page'>
      <SecondHeroSection secondHeroTitle='Liburan alam untuk anda' />
      <AmsterdamCityBreaksSection />
      <HolidayPlanSection itemHolidayPlanTitle='Temukan Perjalanan Indahmu.' />
      <LondonCityBreaksSection />
      <div className='my-4 my-sm-5'>
        <RecommendedSection itemRecommendedTitle='Liburan impian Anda.' />
      </div>
      <ParisCityBreaksSection />
      <NeedInspirationSection />
    </div>
  )
}

export default CityBreaks;