import { useParams } from "react-router-dom"
import { useGetPostQuery } from "../store/api"
import styles from '../styles/posts/_postpage.module.scss'
import ReactLoading from 'react-loading'
import Comments from '../components/Comments'
import UserCard from "../components/UserCard"

const PostPage = () => {
  const { id } = useParams()

  const { data: post, isLoading } = useGetPostQuery(id)

  return(
    <div className={styles.post_page}>
      {
        isLoading ?
        <ReactLoading type={"spin"} color={"#ffffff"} height={667} width={375} />
        :
        <>
          <div className={styles.post_page__content}>
            <h2 className={styles.post_page__title}>{post?.title}</h2>
            <p className={styles.post_page__body}>{post?.body}</p>

            <div className={styles.post_page__info}>
              <div className={styles.author}>
                <UserCard id={post?.userId}/>
              </div>
              <div className={styles.views}>
                <span>Просмотры:</span>
                <span>{post?.views}</span>
              </div>
              <div className={styles.reactions}>
                <span>Реакции:</span>
                <span>
                  <span className={styles.likes}>
                    👍 {post?.reactions.likes}
                  </span>
                  <span className={styles.dislikes}>
                    👎 {post?.reactions.dislikes}
                  </span>
                </span>
              </div>
            </div>

            <div className={styles.post_page__tags}>
              
            </div>
          </div>

          <Comments />
        </>
      }
      
    </div>
  )
}

export default PostPage