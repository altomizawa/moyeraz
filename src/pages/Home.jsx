import Header from '../components/Header'
import WhyUs from '../components/WhyUs'
import BuyOrSell from '../components/BuyOrSell'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <Header />
      <WhyUs />
      <BuyOrSell />
    </div>
  )
}

export default Home
