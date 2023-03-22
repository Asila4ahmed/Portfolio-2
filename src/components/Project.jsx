import bannerOne from "../assets/NFT-Token.jpeg"
import bannerTwo from "../assets/WhatsApp Image 2023-03-22 at 9.38.52 PM.jpeg"
import bannerThree from "../assets/WhatsApp Image 2023-03-19 at 7.34.24 PM.jpeg"
import bannerFour from "../assets/WhatsApp Image 2023-03-22 at 9.35.17 PM.jpeg"

function Project() {
    return (
      <div className="project" id="for-projects">
        <h2>Projects</h2>
        <span></span>
        <p>All my projects include links to the source code on Github. Click on the 'GitHub Link' attached to know about each project.</p>
        <div className="card-container">
          <div className="card">
            <div className="card-img">
            <img src={bannerTwo}  alt=""/>
            </div>
            <a href="https://github.com/Asila4ahmed/Portfolio/blob/main/ERC20-2.sol">Github Link</a>
          </div>
          <div className="card">
            <div className="card-img"> 
            <img src={bannerThree} alt="" />
            </div>
            <a href="https://github.com/Asila4ahmed/Portfolio/blob/main/CrowdFunding.sol">Github Link</a>
          </div>
          <div className="card">
            <div className="card-img">
            <img src={bannerOne} alt="" />
            </div>
            <a href="https://github.com/Asila4ahmed/Portfolio/blob/main/NFT.sol">Github Link</a>
          </div>
          <div className="card">
            <div className="card-img">
            <img src={bannerFour} alt="" />
            </div>
            <a href="https://github.com/Asila4ahmed/Portfolio/blob/main/PiggyBank.sol">Github Link</a>
          </div>

        </div>
      </div>
    )
  }
  
  export default Project