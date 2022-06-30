import Styles from "../styles/card.module.css";
import Link from "next/link";

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
      <ul className={Styles.List}>
        {posts.map((post) => (
          <>
            <li className={Styles.CardButton} key={post.id}>
              <Link href={`/posts/${post.id}`}>
                <h1 className={Styles.cardTitle}>{post.title}</h1>
              </Link>
            </li>
          </>
        ))}
      </ul>
    </section>
  );
}
