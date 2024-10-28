import { useState } from "react";
import styles from "./NewArrivalsSlider.module.scss";
import { useEffect } from "react";
import NewArrivalsCard from "./NewArrivalsCard";

function NewArrivalsSlider() {
  const [newArrivals, setNewArrivals] = useState([]);

  useEffect(
    () =>
      setNewArrivals([
        {
          id: "00001",
          itemName: "Loveseat Sofa",
          imgSrc: "./img/newArrivals/product-00001.jpg",
          discount: 50,
          price: 400.0,
          finalPrice: 199.0,
        },
        {
          id: "00002",
          itemName: "Table Lamp",
          imgSrc: "./img/newArrivals/product-00002.jpg",
          discount: 0,
          price: 24.99,
          finalPrice: 24.99,
        },
        {
          id: "00003",
          itemName: "Beige Table Lamp",
          imgSrc: "./img/newArrivals/product-00003.jpg",
          discount: 0,
          price: 24.99,
          finalPrice: 24.99,
        },
        {
          id: "00004",
          itemName: "Bamboo basket",
          imgSrc: "./img/newArrivals/product-00004.jpg",
          discount: 0,
          price: 30.99,
          finalPrice: 30.99,
        },
        // {
        //   id: "00005",
        //   itemName: "Toasted",
        //   imgSrc: "./img/newArrivals/product-00005.jpg",
        //   discount: 50,
        //   price: 450.0,
        //   finalPrice: 224.99,
        // },
        // {
        //   id: "00006",
        //   itemName: "Black Tray table",
        //   imgSrc: "./img/newArrivals/product-00006.jpg",
        //   discount: 50,
        //   price: 40.0,
        //   finalPrice: 19.99,
        // },
        // {
        //   id: "00007",
        //   itemName: "White Drawer unit",
        //   imgSrc: "./img/newArrivals/product-00007.jpg",
        //   discount: 0,
        //   price: 89.99,
        //   finalPrice: 89.99,
        // },
      ]),
    []
  );

  return (
    <div className={styles.carousel}>
      {newArrivals.map((item) => (
        <NewArrivalsCard key={item.id} imgSrc={item.imgSrc} />
      ))}
    </div>
  );
}

export default NewArrivalsSlider;
