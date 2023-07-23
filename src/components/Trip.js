import Trip1 from "../assets/5.jpeg";
import Trip2 from "../assets/6.jpeg";
import Trip3 from "../assets/8.jpg";
import TripData from "./TripData";
import "./TripsStyles.css";
function Trip() {
  return (
    <div className="trip">
      <h1>Recents Trips</h1>
      <p>you can discover unique destinations using Google Maps</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip to Kathmandu"
          text="Kathmandu is particularly famous for its religious monuments. Various temples, monasteries, and stupas adorn the city's landscape, particularly the Pashupatinath Temple and the Changu Narayan which are famous for their stunning, intricate religious artworks"
        />
        <TripData
          image={Trip2}
          heading="Trip to Pokhara"
          text="One of the main attractions of Pokhara is the lakes. There are eight lakes in Pokhara and Fewa Lake is the largest of all. Most people love to spend their time at Phewa Lake as the view of the lake from the Lakeside is just spectacular. The lake is surrounded by green forests and mountains."
        />
        <TripData
          image={Trip3}
          heading="Trip to Manang"
          text="
          Manang - A Beautiful Himalayan Village In Annapurna Trek Region
          The Manang Valley is simply the paradise for trekking, tourist destination, The Manang trek offers you incredible Beauty of natural ,rich culture and spectacular views of Annapurna ranges. Manang is called the “crown jewel” of the famous Annapurna Circuit Trek.
          "
        />
      </div>
    </div>
  );
}

export default Trip;
