import bannerOne from "../assets/NFT-Token.jpeg"
import bannerTwo from "../assets/WhatsApp Image 2023-03-22 at 9.38.52 PM.jpeg"
import bannerThree from "../assets/WhatsApp Image 2023-03-19 at 7.34.24 PM.jpeg"
import bannerFour from "../assets/WhatsApp Image 2023-03-22 at 9.35.17 PM.jpeg"

function Project() {
    return (
      <div className="project" id="for-projects">
        <h2>Projects</h2>
        <span></span>
        <p>All my projects include links to the source code on GitHub. Click on the name of each project attached to access the code for the project on GitHub.</p>
        <div className="card-container">
          <div className="card">
            <div className="card-img">
            <img src={bannerTwo}  alt=""/>
            </div>
            <a href="https://github.com/Asila4ahmed/Portfolio/blob/main/ERC20-2.sol">ERC-20 Token</a>
          </div>
          <div className="card">
            <div className="card-img"> 
            <img src={bannerThree} alt="" />
            </div>
            <a href="https://github.com/Asila4ahmed/Portfolio/blob/main/CrowdFunding.sol">Crowd Funding</a>
          </div>
          <div className="card">
            <div className="card-img">
            <img src={bannerOne} alt="" />
            </div>
            <a href="https://github.com/Asila4ahmed/Portfolio/blob/main/NFT.sol">NFT</a>
          </div>
          <div className="card">
            <div className="card-img">
            <img src={bannerFour} alt="" />
            </div>
            <a href="https://github.com/Asila4ahmed/Portfolio/blob/main/PiggyBank.sol">Piggy Bank</a>
          </div>

        </div>
      </div>
    )
  }
  
  export default Project