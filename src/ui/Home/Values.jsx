import ValueCard from "./ValueCard";
import styles from "./Values.module.css";

function Values() {
  return (
    <div className="container">
      <section className={styles.cards}>
        <ValueCard
          icon="/icons/fast-delivery.svg"
          title="Free Shipping"
          text="Order above $200"
        />
        <ValueCard
          icon="/icons/money.svg"
          title="Money-back"
          text="30 days guarantee"
        />
        <ValueCard
          icon="/icons/lock.svg"
          title="Secure Payments"
          text="Secured by Stripe"
        />
        <ValueCard
          icon="/icons/call.svg"
          title="24/7 Support"
          text="Phone and Email support"
        />
      </section>
    </div>
  );
}

export default Values;
