import { useEffect, useRef, useCallback, useState } from "react";
import PostCard from "../components/PostCard";
import { useGetPostsQuery } from "../store/api";
import styles from "../styles/posts/_posts.module.scss";
import ReactLoading from "react-loading";
import { Post } from "../interfaces/interfaces";

const Posts = () => {
  const [page, setPage] = useState(0);
  const observer = useRef<IntersectionObserver | null>(null);
  const lastPostRef = useRef<HTMLLIElement | null>(null);

  const { data: res, isLoading, isFetching } = useGetPostsQuery(page);

  const loadMorePosts = useCallback(() => {
    setPage((prevPage) => prevPage + 1);
  }, []);

  useEffect(() => {
    if (isLoading || isFetching) return;

    const options = {
      root: null,
      threshold: 1.0,
    };

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadMorePosts();
        }
      });
    }, options);

    if (lastPostRef.current) {
      observer.current.observe(lastPostRef.current);
    }

    return () => {
      if (lastPostRef.current && observer.current) {
        observer.current.unobserve(lastPostRef.current);
      }
    };
  }, [isLoading, isFetching, loadMorePosts]);

  return (
    <>
      {isLoading ? (
        <ReactLoading
          type={"spin"}
          color={"#000000"}
          height={667}
          width={375}
        />
      ) : (
        <ul className={styles.posts_list}>
          {res?.posts.map((post: Post, index: number) => {
            const isLastPost = index === res.posts.length - 1;
            return (
              <li ref={isLastPost ? lastPostRef : null} key={post.id}>
                <PostCard key={post.id} post={post} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Posts;
