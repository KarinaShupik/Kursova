import img1 from "../img/image 8.png"
import img2 from "../img/image 9.png"
import img3 from "../img/image 10.png"
import img4 from "../img/image 11.png"
import img5 from "../img/image 12.png"
import img6 from "../img/image 13.png"
import img7 from "../img/image 14.png"
import "../styles/Gallery.css"

export default function Gallery() {
    return (
        <div className="gallery-container">
        <h1 id="gallery_title">Gallery</h1>
        <div className="gallery">
            <div className="gallery-item div1">
                <img src={img1} alt="Image 1" />
            </div>
            <div className="gallery-item div2">
                <img src={img2} alt="Image 2" />
            </div>
            <div className="gallery-item div3">
                <img src={img3} alt="Image 3" />
            </div>
            <div className="gallery-item div4">
                <img src={img4} alt="Image 4" />
            </div>
            <div className="gallery-item div5">
                <img src={img5} alt="Image 5" />
            </div>
            <div className="gallery-item div6">
                <img src={img6} alt="Image 6" />
            </div>
            
        </div>
    </div>
    )
  }