import React from "react";
import SolutionsSection from "../components/SolutionsSection";
import ITServicesSection from "../components/ITServicesSection";
import WorkingProcessSection from "../components/WorkingProcessSection";
import WorkTogether from "../components/WorkTogether"
import WhatsAppButton from '../components/WhatsAppButton';

function Services() {
    const phoneNumber = '918667853720'; // Replace with your WhatsApp number
    const message = 'Hello, I am interested in your web services.';

    return (
        <>
            <SolutionsSection />
            <ITServicesSection />
            <WorkingProcessSection />
            <WorkTogether />
            <WhatsAppButton phoneNumber={phoneNumber} message={message} />
        </>
    )
}

export default Services;
