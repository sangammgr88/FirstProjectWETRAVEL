import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/3.jpg";
import Mountain4 from "../assets/4.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyle.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you the opportunite</p>

      <DestinationData
        className="first-des"
        heading="Mustang, Nepal"
        text="Mustang, Nepal is a remote and beautiful region in the Himalayas
      known for its stunning landscapes, rich Tibetan Buddhist culture,
      and ancient history. Divided into Upper Mustang and Lower Mustang,
      the district features arid desert-like terrain, deep gorges, and the
      Kali Gandaki River. It has preserved its traditional Tibetan customs
      and architecture, with monasteries showcasing beautiful art.
      Trekking in Upper Mustang offers a unique experience, requiring a
      special permit. The people of Mustang, called Lo Tibetans, have a
      distinct culture and language. The Tiji Festival is a major cultural
      event. While tourism brings economic opportunities, efforts are
      being made to promote sustainable practices. Mustang offers a
      glimpse into ancient traditions and breathtak"
        img1={Mountain1}
        img2={Mountain2}
      />
      <DestinationData
        className="first-des-reserve"
        heading="Pokhara, Nepal"
        text="Pokhara’s tranquil beauty has been the subject of inspiration for many travel writers. Its pristine air, spectacular backdrop of snowy peaks, blue lakes and surrounding greenery make it ‘the jewel in the Himalaya’, a place of remarkable natural disposition. With the magnificent Annapurna range forming the backdrop and the serenity of the Cluster of 9 Lakes with three major ones - Phewa, Rupa and Begnas – Pokhara is a great destination for a weekend getaway as well as a long relaxing holiday. Pokhara Valley, gateway to the Annapurna region where many a trekker finds his Shangri-la, sits high on the list of ‘must visit’ places in Nepal."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
