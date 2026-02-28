import BlogHero from "../components/blog/BlogHero";
import BlogGrid from "../components/blog/BlogGrid";
import { blogPosts, blogHeroSubtitle } from "../lib/blogData";
import styles from "./blog.module.css";

export default function BlogPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <BlogHero subtitle={blogHeroSubtitle} />
        <BlogGrid posts={blogPosts} />
      </main>
    </div>
  );
}
