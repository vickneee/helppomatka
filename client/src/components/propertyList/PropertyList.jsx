import useFetch from "../../services/useFetch";
import "./propertyList.css";
import {useNavigate} from "react-router-dom";
import LazyImage from "../lazyImage/LazyImage.jsx";

// Images
import Image1 from "./images/image-1.png";
import Image2 from "./images/image-2.png";
import Image3 from "./images/image-3.png";
import Image4 from "./images/image-4.png";
import Image5 from "./images/image-5.png";

const PropertyList = () => {
    const {data, loading} = useFetch("https://helppomatka-backend.onrender.com/api/hotels/countByType");

    const navigate = useNavigate();

    const images = [Image1, Image2, Image3, Image4, Image5];

    const right = () => {
        const right = document.querySelector(".pListMobile");
        right.scrollBy(100, 0);
    };

    const left = () => {
        const right = document.querySelector(".pListMobile");
        right.scrollBy(-100, 0);
    };

    return (<div className="list container" id="list">
        <h1 className="homeTitle mb-3">Selaa kiinteistötyypin mukaan</h1>
        <div className="pList row">
            {loading || data.length === 0 ? (<div className="lds-roller mx-auto">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>) : (<>
                {images.map((img, i) => (<div key={i} className="col">
                    <div className="pListItem" onClick={() => {
                        navigate("/hotels", {
                            state: {type: data[i]?.type},
                        });
                    }} >
                        <img src={img} alt="" className="pListImg"/>
                        <div className="pListTitles">
                            <h1>{data[i]?.type}</h1>
                            <h2>
                                {data[i]?.count} {data[i]?.type}
                            </h2>
                        </div>
                    </div>
                </div>))}
            </>)}
        </div>
        <div className="mobile">
            <div className="pListMobile">
                {data.length !== 0 && (<div className="flasher right">
                    <i className="bx bx-chevrons-right bx-flashing" onClick={right}></i>
                </div>)} {data.length !== 0 && (<div className="flasher left">
                <i className="bx bx-chevrons-left bx-flashing" onClick={left}></i>
            </div>)} {loading || data.length === 0 ? (<div className="lds-roller mx-auto">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>) : (<>
                {data && images.map((img, i) => (<div className="pListItemMobile me-3" onClick={() => {
                    navigate("/hotels", {
                        state: {type: data[i]?.type},
                    });
                }} key={i}>
                    <LazyImage src={img} alt="" className="pListImg"/>

                    <div className="pListTitles">
                        <h1>{data[i]?.type}</h1>
                        <h2>
                            {data[i]?.count} {data[i]?.type}
                        </h2>
                    </div>
                </div>))}
            </>)}
            </div>
        </div>
    </div>);
};

export default PropertyList;
