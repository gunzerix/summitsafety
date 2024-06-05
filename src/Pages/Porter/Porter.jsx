import React from 'react';
import './Porter.css';
import SecondHeroSection from '../../Components/SecondHeroSection/SecondHeroSection';
import PorterCp from '../../Components/PorterCp/PorterCp';
import NeedInspirationSection from '../../Components/NeedInspiration/NeedInspirationSection';
import NextHoliday from '../../Components/NextHoliday/NextHoliday';
import HolidayPlanSection from '../../Components/HolidayPlanSection/HolidayPlanSection';
import RecommendedSection from '../../Components/RecommendedSection/RecommendedSection';

function Porter() {
    return (
        <div className='holidays-page'>
            <SecondHeroSection secondHeroTitle='Lengkapi perlengkapanmu' />
            <PorterCp />
            <NeedInspirationSection />
            <NextHoliday />
            <HolidayPlanSection itemHolidayPlanTitle='Rencanakan perjalananmu.' />
            <div className='mt-4 mt-sm-5'>
                <RecommendedSection itemRecommendedTitle='Rekomendasi untuk anda.' />
            </div>
        </div>
    )
}

export default Porter;