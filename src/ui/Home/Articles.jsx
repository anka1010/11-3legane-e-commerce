import ButtonLink from "../ButtonLink";
import ArticleCard from "./ArticleCard";
import styles from "./Articles.module.scss";

function Articles() {
  return (
    <div className="container-sm">
      <section className={styles.articles}>
        <div className={styles.header}>
          <h2 className={styles.title}>Articles</h2>
          <ButtonLink to="/articles">More Articles</ButtonLink>
        </div>

        <div className={styles.cards}>
          <ArticleCard
            imgSrc="./img/articles/article1.jpg"
            imgAlt="Article preview"
            title="7 ways to decor your home"
            articleId="1"
          />
          <ArticleCard
            imgSrc="./img/articles/article2.jpg"
            imgAlt="Article preview"
            title="Kitchen organization"
            articleId="2"
          />
          <ArticleCard
            imgSrc="./img/articles/article3.jpg"
            imgAlt="Decor your bedroom"
            title="7 ways to decor your home"
            articleId="3"
          />
        </div>
      </section>
    </div>
  );
}

export default Articles;
