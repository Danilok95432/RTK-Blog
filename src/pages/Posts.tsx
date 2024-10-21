import PostCard from "../components/PostCard"
import { useGetPostsQuery } from "../store/api"
import styles from '../styles/posts/_posts.module.scss'
import ReactLoading from 'react-loading'
import { Post } from "../interfaces/interfaces"

const Posts = () => {

  const { data: res, isLoading } = useGetPostsQuery()

  return(
    <>
    {
      isLoading ?
      <ReactLoading type={"spin"} color={"#000000"} height={667} width={375} />
      :
      <ul className={styles.posts_list}>
        {
          res?.posts.map((post: Post) => {
            return <PostCard key={post.id} post={post}/>
          })
        }
      </ul>
    }
    </>
  )
}

export default Posts