import { useGetPostsQuery } from "../store/api"
import styles from '../styles/posts/_posts.module.scss'

const Posts = () => {

  const { data: res } = useGetPostsQuery()

  return(
    <ul className={styles.posts_list}>
      {
        res ?
        res.posts.map((post: any) => {
          return <li key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </li>
        })
        :
        null
      }
    </ul>
  )
}

export default Posts