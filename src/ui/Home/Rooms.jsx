import RoomCard from "./RoomCard";
import styles from "./Rooms.module.css";

function Rooms() {
  return (
    <div className="container">
      <section className={styles.cards}>
        <RoomCard
          imgSrc="/img/rooms/room1.jpg"
          imgAlt="Living room product"
          cardName="Living Room"
        />

        <div className={styles.column}>
          <RoomCard
            imgSrc="/img/rooms/room2.jpg"
            imgAlt="Bedroom product"
            cardName="Bedroom"
            type="small"
          />
          <RoomCard
            imgSrc="/img/rooms/room3.jpg"
            imgAlt="Kitchen product"
            cardName="Kitchen"
            type="small"
          />
        </div>
      </section>
    </div>
  );
}

export default Rooms;
