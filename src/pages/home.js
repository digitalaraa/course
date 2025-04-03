import React from "react";
import BusinessSuccessSection from "../components/BusinessSuccessSection";
import ContactSection from "../components/ContactSection";
import ContentPage from "../components/ContentPage";
import ServicesSection from "../components/ServicesSection";
import Stats from "../components/Stats";
import PricingSection from "../components/PricingSection"; // Adjust the path as needed


function Home() {
    return (
        <>
        <BusinessSuccessSection />
        <Stats />
        <ServicesSection />
        <ContentPage />
        <PricingSection />
        <ContactSection />
    </>
    )
}

export default Home;
