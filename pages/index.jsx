import Head from "../components/Head";
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
      <Head />
      <div className={Styles.List}>
        {posts.map((post) => (
          <div className={Styles.Card}>
            <div key={post.id}>
              <h1 className={Styles.cardTitle}>{post.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
