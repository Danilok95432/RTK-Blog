import { CommentCardProps } from "../interfaces/interfaces"
import styles from '../styles/comments/_comments.module.scss'
import UserCard from "./UserCard"

const CommentCard: React.FC<CommentCardProps> = ({ comment }) => {
  return(
    <li className={styles.comment}>
      <div className={styles.comment__content}>
        <p>{comment.body}</p>
      </div>

      <div className={styles.comment__info}>
        <UserCard id={comment.user.id} />
        <div className={styles.reactions}>
          <span className={styles.likes}>
            👍 {comment.likes}
          </span>
          <span className={styles.dislikes}>
            👎 {comment.dislikes}
          </span>
        </div>
      </div>
    </li>
  )
}

export default CommentCard