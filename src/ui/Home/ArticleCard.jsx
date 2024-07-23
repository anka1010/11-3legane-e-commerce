import ButtonLink from "../ButtonLink";
import styles from "./ArticleCard.module.css";

function ArticleCard({ imgSrc, imgAlt, title }) {
  return (
    <div>
      <img src={imgSrc} alt={imgAlt} />
      <h3 className={styles.title}>{title}</h3>
      <ButtonLink to="/articles">Read More</ButtonLink>
    </div>
  );
}

export default ArticleCard;
