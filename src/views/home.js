import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features21 from '../components/features21'
import Features25 from '../components/features25'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Only Heartfelt Dogfish</title>
        <meta property="og:title" content="Only Heartfelt Dogfish" />
      </Helmet>
      <Navbar8
        link1={
          <fragment>
            <span className="home-text thq-link thq-body-small">Home</span>
          </fragment>
        }
        link2={
          <fragment>
            <span className="home-text01 thq-link thq-body-small">
              About Us
            </span>
          </fragment>
        }
        link3={
          <fragment>
            <span className="home-text02 thq-link thq-body-small">
              Services
            </span>
          </fragment>
        }
        link4={
          <fragment>
            <span className="home-text03 thq-link thq-body-small">Contact</span>
          </fragment>
        }
        page1={
          <fragment>
            <span className="home-text04 thq-body-large">Home</span>
          </fragment>
        }
        page2={
          <fragment>
            <span className="home-text05 thq-body-large">About Us</span>
          </fragment>
        }
        page3={
          <fragment>
            <span className="home-text06 thq-body-large">Services</span>
          </fragment>
        }
        page4={
          <fragment>
            <span className="home-text07 thq-body-large">Contact</span>
          </fragment>
        }
        action1={
          <fragment>
            <span className="home-text08">Book Now</span>
          </fragment>
        }
        action2={
          <fragment>
            <span className="home-text09">Learn More</span>
          </fragment>
        }
        page1Description={
          <fragment>
            <span className="home-text10 thq-body-small">
              Welcome to our Equine Therapy and Meditation Retreat center where
              you can find peace and connection with nature.
            </span>
          </fragment>
        }
        page2Description={
          <fragment>
            <span className="home-text11 thq-body-small">
              Learn more about our mission, values, and the team behind our
              Equine Therapy and Meditation Retreat.
            </span>
          </fragment>
        }
        page3Description={
          <fragment>
            <span className="home-text12 thq-body-small">
              Explore the various equine therapy and meditation services we
              offer to help you on your journey to healing and self-discovery.
            </span>
          </fragment>
        }
        page4Description={
          <fragment>
            <span className="home-text13 thq-body-small">
              Get in touch with us to book a retreat, ask questions, or provide
              feedback. We are here to support you.
            </span>
          </fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <fragment>
            <span className="home-text14 thq-body-small">Main action</span>
          </fragment>
        }
        action2={
          <fragment>
            <span className="home-text15 thq-body-small">Secondary action</span>
          </fragment>
        }
        content1={
          <fragment>
            <span className="home-text16 thq-body-large">
              Immerse yourself in the serene beauty of our retreat center, where
              horses and nature create a tranquil setting for healing and
              self-discovery.
            </span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="home-text17 thq-heading-1">
              Find Peace and Connection Through Equine Therapy and Meditation
            </span>
          </fragment>
        }
      ></Hero17>
      <Features24
        feature1Title={
          <fragment>
            <span className="home-text18 thq-heading-2">
              Equine Therapy Sessions
            </span>
          </fragment>
        }
        feature2Title={
          <fragment>
            <span className="home-text19 thq-heading-2">
              Emotional Healing with Horses
            </span>
          </fragment>
        }
        feature3Title={
          <fragment>
            <span className="home-text20 thq-heading-2">
              Guided Meditation in Nature
            </span>
          </fragment>
        }
        feature1Description={
          <fragment>
            <span className="home-text21 thq-body-small">
              Engage in therapeutic activities with our gentle horses
            </span>
          </fragment>
        }
        feature2Description={
          <fragment>
            <span className="home-text22 thq-body-small">
              Interact with horses to promote emotional healing
            </span>
          </fragment>
        }
        feature3Description={
          <fragment>
            <span className="home-text23 thq-body-small">
              Experience deep relaxation and connection with nature
            </span>
          </fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <fragment>
            <span className="home-text24">Book Now</span>
          </fragment>
        }
        content1={
          <fragment>
            <span className="home-text25 thq-body-large">
              Experience the healing power of horses and meditation in a serene
              natural setting.
            </span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="home-text26 thq-heading-2">
              Book Your Equine Therapy and Meditation Retreat Today
            </span>
          </fragment>
        }
      ></CTA26>
      <Features21
        feature1Title={
          <fragment>
            <span className="home-text27 thq-heading-2">
              Equine Therapy Sessions
            </span>
          </fragment>
        }
        feature2Title={
          <fragment>
            <span className="home-text28 thq-heading-2">
              Guided Meditations
            </span>
          </fragment>
        }
        feature3Title={
          <fragment>
            <span className="home-text29 thq-heading-2">
              Workshops and Retreats
            </span>
          </fragment>
        }
        feature4Title={
          <fragment>
            <span className="home-text30 thq-heading-2">Nature Walks</span>
          </fragment>
        }
        feature1Description={
          <fragment>
            <span className="home-text31 thq-body-small">
              Experience the healing power of interacting with horses in our
              therapy sessions led by experienced professionals.
            </span>
          </fragment>
        }
        feature2Description={
          <fragment>
            <span className="home-text32 thq-body-small">
              Immerse yourself in guided meditations surrounded by the serene
              beauty of nature and the calming presence of horses.
            </span>
          </fragment>
        }
        feature3Description={
          <fragment>
            <span className="home-text33 thq-body-small">
              Join our workshops and retreats designed to promote
              self-discovery, emotional well-being, and personal growth through
              horse interactions and nature experiences.
            </span>
          </fragment>
        }
        feature4Description={
          <fragment>
            <span className="home-text34 thq-body-small">
              Embark on peaceful nature walks in the company of our gentle
              horses, allowing you to connect with the natural world and find
              inner peace.
            </span>
          </fragment>
        }
      ></Features21>
      <Features25
        feature1Title={
          <fragment>
            <span className="home-text35 thq-heading-2">
              Equine Therapy Sessions
            </span>
          </fragment>
        }
        feature2Title={
          <fragment>
            <span className="home-text36 thq-heading-2">
              Meditation Workshops
            </span>
          </fragment>
        }
        feature3Title={
          <fragment>
            <span className="home-text37 thq-heading-2">Nature Walks</span>
          </fragment>
        }
        feature1Description={
          <fragment>
            <span className="home-text38 thq-body-small">
              Experience the healing power of horses through our guided equine
              therapy sessions led by experienced professionals.
            </span>
          </fragment>
        }
        feature2Description={
          <fragment>
            <span className="home-text39 thq-body-small">
              Join our meditation workshops in serene natural settings to find
              inner peace and balance.
            </span>
          </fragment>
        }
        feature3Description={
          <fragment>
            <span className="home-text40 thq-body-small">
              Immerse yourself in the beauty of nature with our guided nature
              walks that promote mindfulness and relaxation.
            </span>
          </fragment>
        }
      ></Features25>
      <Steps2
        step1Title={
          <fragment>
            <span className="home-text41 thq-heading-2">
              Introduction to Equine Therapy
            </span>
          </fragment>
        }
        step2Title={
          <fragment>
            <span className="home-text42 thq-heading-2">
              Meditation Sessions
            </span>
          </fragment>
        }
        step3Title={
          <fragment>
            <span className="home-text43 thq-heading-2">
              Interactive Horse Activities
            </span>
          </fragment>
        }
        step4Title={
          <fragment>
            <span className="home-text44 thq-heading-2">
              Nature Walks and Reflection
            </span>
          </fragment>
        }
        step1Description={
          <fragment>
            <span className="home-text45 thq-body-small">
              Learn about the benefits of equine therapy and how it can help in
              personal growth and healing.
            </span>
          </fragment>
        }
        step2Description={
          <fragment>
            <span className="home-text46 thq-body-small">
              Participate in guided meditation sessions in serene natural
              surroundings to promote relaxation and mindfulness.
            </span>
          </fragment>
        }
        step3Description={
          <fragment>
            <span className="home-text47 thq-body-small">
              Engage in hands-on activities with horses to build trust,
              communication, and emotional awareness.
            </span>
          </fragment>
        }
        step4Description={
          <fragment>
            <span className="home-text48 thq-body-small">
              Take peaceful walks in nature to reflect on your experiences and
              connect with the environment.
            </span>
          </fragment>
        }
      ></Steps2>
      <Testimonial17
        review1={
          <fragment>
            <span className="home-text49 thq-body-small">
              I cannot recommend this retreat enough. The combination of equine
              therapy and meditation is powerful and healing.
            </span>
          </fragment>
        }
        review2={
          <fragment>
            <span className="home-text50 thq-body-small">
              Being in the presence of these majestic animals while practicing
              mindfulness was a profound experience. I left feeling rejuvenated
              and centered.
            </span>
          </fragment>
        }
        review3={
          <fragment>
            <span className="home-text51 thq-body-small">
              The Equine Therapy and Meditation Retreat provided a unique
              opportunity to connect with nature and oneself. I left with a
              sense of clarity and gratitude.
            </span>
          </fragment>
        }
        review4={
          <fragment>
            <span className="home-text52 thq-body-small">
              I have attended many retreats, but this one stands out for its
              holistic approach to well-being. The horses added a special
              element that enhanced the entire experience.
            </span>
          </fragment>
        }
        content1={
          <fragment>
            <span className="home-text53 thq-body-small">
              My experience at the Equine Therapy and Meditation Retreat was
              truly transformative. The connection with the horses and the
              serene surroundings helped me find inner peace like never before.
            </span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="home-text54 thq-heading-2">Testimonials</span>
          </fragment>
        }
        author1Name={
          <fragment>
            <span className="home-text55 thq-body-large">Sarah Johnson</span>
          </fragment>
        }
        author2Name={
          <fragment>
            <span className="home-text56 thq-body-large">Michael Smith</span>
          </fragment>
        }
        author3Name={
          <fragment>
            <span className="home-text57 thq-body-large">Emily Chen</span>
          </fragment>
        }
        author4Name={
          <fragment>
            <span className="home-text58 thq-body-large">David Rodriguez</span>
          </fragment>
        }
        author1Position={
          <fragment>
            <span className="home-text59 thq-body-small">Yoga Instructor</span>
          </fragment>
        }
        author2Position={
          <fragment>
            <span className="home-text60 thq-body-small">
              Mindfulness Coach
            </span>
          </fragment>
        }
        author3Position={
          <fragment>
            <span className="home-text61 thq-body-small">Wellness Blogger</span>
          </fragment>
        }
        author4Position={
          <fragment>
            <span className="home-text62 thq-body-small">Life Coach</span>
          </fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <fragment>
            <span className="home-text63 thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="home-text64 thq-heading-2">Contact Us</span>
          </fragment>
        }
        location1={
          <fragment>
            <span className="home-text65 thq-heading-3">Main Office</span>
          </fragment>
        }
        location2={
          <fragment>
            <span className="home-text66 thq-heading-3">Secondary Office</span>
          </fragment>
        }
        location1Description={
          <fragment>
            <span className="home-text67 thq-body-large">
              1234 Horse Haven Way, Retreat City, Earth
            </span>
          </fragment>
        }
        location2Description={
          <fragment>
            <span className="home-text68 thq-body-large">
              5678 Equine Path, Serenity Springs, Earth
            </span>
          </fragment>
        }
      ></Contact10>
      <Footer4
        link1={
          <fragment>
            <span className="home-text69 thq-body-small">About Us</span>
          </fragment>
        }
        link2={
          <fragment>
            <span className="home-text70 thq-body-small">Services</span>
          </fragment>
        }
        link3={
          <fragment>
            <span className="home-text71 thq-body-small">Events</span>
          </fragment>
        }
        link4={
          <fragment>
            <span className="home-text72 thq-body-small">Contact Us</span>
          </fragment>
        }
        link5={
          <fragment>
            <span className="home-text73 thq-body-small">FAQ</span>
          </fragment>
        }
        termsLink={
          <fragment>
            <span className="home-text74 thq-body-small">
              Terms and Conditions
            </span>
          </fragment>
        }
        cookiesLink={
          <fragment>
            <span className="home-text75 thq-body-small">Cookies Policy</span>
          </fragment>
        }
        privacyLink={
          <fragment>
            <span className="home-text76 thq-body-small">Privacy Policy</span>
          </fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
