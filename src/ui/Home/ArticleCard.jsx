import ButtonLink from "../ButtonLink";
import styles from "./ArticleCard.module.scss";

function ArticleCard({ imgSrc, imgAlt, title, articleId }) {
  return (
    <div>
      <img src={imgSrc} alt={imgAlt} />
      <h3>{title}</h3>
      <ButtonLink to={`/articles/${articleId}`} className={styles.link}>
        Read More
      </ButtonLink>
    </div>
  );
}

export default ArticleCard;
