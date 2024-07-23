import ButtonLink from "../ButtonLink";
import ArticleCard from "./ArticleCard";
import styles from "./Articles.module.css";

function Articles() {
  return (
    <div className="container">
      <section className={styles.articles}>
        <div className={styles.header}>
          <h2 className={styles.title}>Articles</h2>
          <ButtonLink to="/shop">More Articles</ButtonLink>
        </div>

        <div className={styles.cards}>
          <ArticleCard
            imgSrc="/img/articles/article1.jpg"
            imgAlt="Article preview"
            title="7 ways to decor your home"
          />
          <ArticleCard
            imgSrc="/img/articles/article2.jpg"
            imgAlt="Article preview"
            title="Kitchen organization"
          />
          <ArticleCard
            imgSrc="/img/articles/article3.jpg"
            imgAlt="Decor your bedroom"
            title="7 ways to decor your home"
          />
        </div>
      </section>
    </div>
  );
}

export default Articles;
