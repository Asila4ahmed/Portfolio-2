import profilePic from "../assets/WhatsApp Image 2023-03-19 at 11.19.15 PM.jpeg"

function About() {
  return (
    <div className="about" id="for-about">
      <h2>About</h2>
      <span></span>
      <div  className='about-info'>
        <div className="bio">  
            <h3>Who am I?</h3>
            <p>I am an avid blockchain developer with experience in building decentralized applications using blockchain technology as well as creating and minting tokens  (cryptocurrencies and Non-Fungible Tokens-NFTs) on various blockchain platforms like Ethereum, Polygon and Binance Smart Chain(BSC).</p>
      <p>In addition to my vast understanding of cryptography and smart contracts, I am experienced in a variety of programming languages such as Solidity, Web3.js and currently learning React.js.</p>
            <p>Further more, I am a diligent and detail-oriented individual with excellent problem-solving skills along side being a strong communicator and collaborative team player with multiple leadership experiences. I am passionate about growth and as such drawn and open to innovative ideas and challenging tasks. Hence, always eager to learn, improve my knowledge and stay up-to-date with the latest trends and technologies in the blockchain world.</p>
            <p>Finally, as a medical practitioner in training, I believe that technology, especially blockchain technology, has the power to revolutionize the healthcare industry and greatly change lives for the better, and I'm excited to be a part of this transformative industry.</p>
        </div>
        <div className="about-img">
    <img src={profilePic} alt="" />
        </div>
        </div>
    </div>
  )
}

export default About