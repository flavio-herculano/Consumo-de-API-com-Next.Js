import Styles from "../styles/card.module.css";

export async function getStaticProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await data.json();

  return {
    props: { posts },
  };
}

export default function Home({ posts }) {
  return (
    <section className={Styles.Container}>
      <div className={Styles.List}>
        {posts.map((post) => (
          <ul className={Styles.Card}>
            <li className={Styles.li} key={post.id}>
              <h1 className={Styles.cardTitle}>{post.title}</h1>
            </li>
          </ul>
        ))}
      </div>
    </section>
  );
}
