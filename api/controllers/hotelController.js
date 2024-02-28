import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";

// CREATE a Hotel
export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel); // SAVE a Hotel
  } catch (err) {
    next(err);
  }
};

// GET a Hotel
export const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
};

// GET all Hotels
export const getHotels = async (req, res, next) => {
  Object.keys(req.query).forEach((key) => {
    if (req.query[key] === "") {
      delete req.query[key];
    }
  });

  console.log(req.query)

  const { min, max, ...others } = req.query;
  try {
    const hotels = await Hotel.find({
      ...others,
      cheapestPrice: { $gt: min | 1, $lt: max || 999 },
    }).limit(req.query.limit);
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
};

// UPDATE a Hotel
export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    next(err);
  }
};

// DELETE a Hotel
export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been deleted.");
  } catch (err) {
    next(err);
  }
};

// COUNT by City
export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};

// COUNT by Type
export const countByType = async (req, res, next) => {
  try {
    const hotelliCount = await Hotel.countDocuments({ type: "hotelli" });
    const asuntoCount = await Hotel.countDocuments({ type: "asunto" });
    const mokkiCount = await Hotel.countDocuments({ type: "mökki" });
    const huvilaCount = await Hotel.countDocuments({ type: "huvila" });
    const lomakohdeCount = await Hotel.countDocuments({ type: "lomakohde" });

    res.status(200).json([
      { type: "hotelli", count: hotelliCount },
      { type: "asunto", count: asuntoCount },
      { type: "mökki", count: mokkiCount },
      { type: "huvila", count: huvilaCount },
      { type: "lomakohde", count: lomakohdeCount },
    ]);
  } catch (err) {
    next(err);
  }
};

// GET Hotel Rooms
export const getHotelRooms = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    const list = await Promise.all(
      hotel.rooms.map((room) => {
        return Room.findById(room);
      })
    );
    res.status(200).json(list)
  } catch (err) {
    next(err);
  }
};
