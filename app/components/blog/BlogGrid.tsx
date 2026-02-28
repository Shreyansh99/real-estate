"use client";

import { useState } from "react";
import { BlogPost } from "../../lib/blogData";
import BlogCard from "./BlogCard";
import styles from "./BlogGrid.module.css";

interface BlogGridProps {
  posts: BlogPost[];
  initialCount?: number;
}

export default function BlogGrid({ posts, initialCount = 9 }: BlogGridProps) {
  const [visibleCount, setVisibleCount] = useState(initialCount);

  const visiblePosts = posts.slice(0, visibleCount);
  const hasMore = visibleCount < posts.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, posts.length));
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.gridWrapper}>
          <div className={styles.grid}>
            {visiblePosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {hasMore && (
            <div className={styles.loadMoreWrapper}>
              <button
                className={styles.loadMoreBtn}
                onClick={handleLoadMore}
                data-border="true"
              >
                <span className={styles.loadMoreText}>Load More</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
