import React from "react";
import BusinessSuccessSection from "../components/BusinessSuccessSection";
import ContactSection from "../components/ContactSection";
import ContentPage from "../components/ContentPage";
import ServicesSection from "../components/ServicesSection";
import Stats from "../components/Stats";


function Home() {
    return (
        <>
        <BusinessSuccessSection />
        <Stats />
        <ServicesSection />
        <ContentPage />
        <ContactSection />
    </>
    )
}

export default Home;
