
import Footer from './layouts/Footer'
import Header from './layouts/Header'
import "./App.css"
import { HeroSectionDemo } from './components/sections/Hero'
import { FeatureSection } from './components/sections/Features'
import { TestimonialsDemo } from './components/sections/Testimonial'
import { DemoVerticalAccordion } from './components/sections/FAQ'
import { DemoOne } from './components/sections/Contact'
import { PricingTableDemo } from './components/sections/Pricing'
import Services from './components/sections/Services'
function App() {
  
  return (
   <>
   <div className="w-full relative">
  <Header/>
  <div className="text-sm ">
<HeroSectionDemo/>
<FeatureSection/>
<Services/>
<TestimonialsDemo/>
<PricingTableDemo/>
<DemoVerticalAccordion/>
<DemoOne/>
  </div>
  </div>
<Footer/>
   </>
  )
}

export default App
