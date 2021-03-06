import { AboutUs } from './components/AboutUs'
import { ButtonToTop } from './components/ButtonToTop'
import { ClientsFeedback } from './components/ClientsFeedback'
import { ContactUs } from './components/ContactUs'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { InfoNumbers } from './components/InfoNumbers'
import { Location } from './components/Location'
import { OurChefs } from './components/OurChefs'
import { OurGalery } from './components/OurGalery'
import { OurPricing } from './components/OurPricing'
import { OurServices } from './components/OurServices'
import { GlobalStyle } from './styles/globalStyles'

export function App() {
  // const [menuIsOpen, setMenuIsOpen] = useState(false)

  return (
    <div style={{overflowX: 'hidden'}}>
      <GlobalStyle />
      <Header />
      <Home />
      <AboutUs />
      <OurPricing />
      {/* <OurServices /> */}
      <OurGalery />
      <InfoNumbers />
      <OurChefs />
      <CTA />
      <ClientsFeedback />
      <ContactUs />
      <Location />
      <Footer />
      <ButtonToTop/>  
    </div>
  )
}