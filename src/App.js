import React from 'react'
import './index.css';
// import Header from './01Retut/header/Header';
// import Content from './01Retut/body/Content';
// import Footer from './01Retut/footer/Footer';
import Header from './02Retut/header/Header';
import Content from './02Retut/content/Content';
import Footer from './02Retut/footer/Footer';
import Button from './02Retut/button/Button';
import Image from './02Retut/image/Image';

function App () {
  return (
    <div className="App">
      <Header />
      <Button />
      <Content />
      <Image />
      <Footer />
      
    </div>
  )
}

export default App

