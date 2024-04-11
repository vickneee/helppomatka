import useFetch from "../../services/useFetch.js";
import { useNavigate } from "react-router-dom";
import "./featured.css";
import Helsinki from "./images/helsinki.png";
import Morokko from "./images/morokko.png";
import Tallinn from "./images/tallinn.png";
import CostaRica from "./images/costarica.png";

const Featured = () => {
  const { data, loading } = useFetch(
    "https://helppomatka-backend.onrender.com/api/hotels/countByCity?cities=Helsinki,Marrakech,Tallinna,Puerto Viejo"
  );
  const navigate = useNavigate();
  return (
    <div className="container">
      <h1 className="homeTitle homeTitle-top mb-3">Kiinteistöt kaupungeittain</h1>
      <div className="featured row gy-3 gx-md-3 gx-3 justify-content-center">
        {loading || data.length === 0 ? (
          <div className="lds-spinner mk-auto">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          <>
            <div className="col-md-6 col-lg-3 col-6">
              <div
                className="featuredItem"
                onClick={() => {
                  navigate("/hotels", {
                    state: { destination: "Helsinki"  },
                  });
                }}
              >
                <img
                  src={Helsinki}
                  alt="Helsinki city"
                  className="featuredImg img-fluid"
                />
                <div className="featuredTitles">
                  <h1>Helsinki</h1>
                  <h2>{data[0]} ominaisuuksia</h2>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 col-6">
              <div
                className="featuredItem"
                onClick={() => {
                  navigate("/hotels", {
                    state: { destination: "Marrakech" },
                  });
                }}
              >
                <img
                  src={Morokko}
                  alt="Morokko city"
                  className="featuredImg img-fluid"
                />
                <div className="featuredTitles">
                  <h1>Morokko</h1>
                  <h2>{data[1]} ominaisuuksia</h2>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-6">
              <div
                className="featuredItem"
                onClick={() => {
                  navigate("/hotels", {
                    state: { destination: "Tallinna" },
                  });
                }}
              >
                <img
                  src={Tallinn}
                  alt="Tallinna city"
                  className="featuredImg img-fluid"
                />
                <div className="featuredTitles">
                  <h1>Tallinna</h1>
                  <h2>{data[2]} ominaisuuksia</h2>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-6">
              <div
                className="featuredItem"
                onClick={() => {
                  navigate("/hotels", {
                    state: { destination: "Puerto Viejo" },
                  });
                }}
              >
                <img
                  src={CostaRica}
                  alt="Costa Rica beach"
                  className="featuredImg img-fluid"
                />
                <div className="featuredTitles">
                  <h1>Costa Rica</h1>
                  <h2>{data[3]} ominaisuuksia</h2>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Featured;
