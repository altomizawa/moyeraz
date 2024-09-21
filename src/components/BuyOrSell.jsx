import './BuyOrSell.css'

const BuyOrSell = () => {
  return (
    <section className='buyorsell'>
      <div className='buyorsell__column'>
        <a href='/'>BUY</a>
        <div className='buyorsell__image-wrapper'>
          <img src="https://images.unsplash.com/photo-1533358728554-627c046949d7?q=80&w=6000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
      </div>
      <div className='buyorsell__column'>
        <a href='/'>SELL</a>
        <div className='buyorsell__image-wrapper'>
          <img src="https://images.unsplash.com/photo-1622059796766-f2b1f9d2d119?q=80&w=3672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
      </div>
     
    </section>
  )
}

export default BuyOrSell
