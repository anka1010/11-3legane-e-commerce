import ButtonLink from "../ButtonLink";
import styles from "./ArticleCard.module.scss";

function ArticleCard({ imgSrc, imgAlt, title }) {
  return (
    <div>
      <img src={imgSrc} alt={imgAlt} />
      <h3>{title}</h3>
      <ButtonLink to="/articles" className={styles.link}>
        Read More
      </ButtonLink>
    </div>
  );
}

export default ArticleCard;
