import Link from "next/link";
import Styles from "/styles/post.module.css";

export async function getStaticProps(context) {
  const { params } = context;
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );

  const post = await data.json();

  return {
    props: { post },
  };
}

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const data = await response.json();

  const paths = data.map((post) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    };
  });

  return { paths, fallback: false };
}

export default function Post({ post }) {
  return (
    <section className={Styles.ContainerPost}>
      <h1 className={Styles.Title}>{post.id}° Post</h1>
      <p className={Styles.Paragraph}>Título: {post.title}</p>
      <Link href="/">
        <button className={Styles.Button}>Voltar</button>
      </Link>
    </section>
  );
}
