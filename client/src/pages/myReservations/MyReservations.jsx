import { useEffect, useState } from "react";
import axios from "axios";
import "./myReservations.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { format } from "date-fns";

const MyReservations = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReservations = async () => {
      setLoading(true);
      try {
        const resReservations = await axios.get(
          "http://localhost:8800/api/reservations/myreservations", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          }
        );
        const reservationsWithHotelDetails = await Promise.all(
          resReservations.data.map(async (reservation) => {
            const resHotel = await axios.get(
              `http://localhost:8800/api/hotels/find/${reservation.hotelId}`
            );

            const images = resHotel.data.photos.map((photoUrl) => ({
              original: photoUrl,
            }));
            return {
              ...reservation,
              hotelDetails: resHotel.data,
              images,
            };
          })
        );
        setReservations(reservationsWithHotelDetails);
      } catch (error) {
        console.error("Error fetching reservations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, []);

  if (loading) {
    return (
      <div>
        <Header type="list" />
        <div className="d-flex justify-content-center">
          <div className="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
  if (reservations.length === 0) {
    return (
      <div>
        <Header type="no-reservations" />
      </div>
    );
  }
  return (
    <div>
      <Header type="reservations" />
      {reservations.map((reservation) => {
        const checkInDate = format(
          new Date(reservation.checkInDate),
          "dd.MM.yyyy"
        );
        const checkOutDate = format(
          new Date(reservation.checkOutDate),
          "dd.MM.yyyy"
        );
        const checkInFormatted = `${checkInDate} kello 12:00`;
        const checkOutFormatted = `${checkOutDate} kello 12:00`;

        return (
          <div key={reservation._id} className="RItem">
            <div className="box">
              <div className="reservationContent">
                <h1 className="hotelTitle">{reservation.hotelDetails.name}</h1>
                <div className="hotelAddress">
                  <span>{reservation.hotelDetails.address}</span>
                </div>
                <div className="hotelPriceHighlight">
                Varausnumero: {reservation.reservationNumber}
                </div>
              </div>
              <div>
                <p className="hotelInfo">Sisäänkirjautuminen: {checkInFormatted}</p>
                <p className="hotelInfo">Uloskirjautuminen: {checkOutFormatted}</p>
              </div>
            </div>
          </div>
        );
      })}
      <Footer />
    </div>
  );
};
export default MyReservations;
