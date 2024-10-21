import { useGetCommentsQuery } from '../store/api';
import styles from '../styles/comments/_comments.module.scss'
import { useState } from 'react'
import { Comment } from '../interfaces/interfaces';
import { useParams } from 'react-router-dom';
import CommentCard from './CommentCard';

const Comments = () => {
  const { id } = useParams()
  const { data: res } = useGetCommentsQuery(id)

  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(e.target.value)
  }

  const handleSubmitComment = () => {
    console.log('New comment:', newComment)
    setNewComment('')
  }

  return(
    <div className={styles.comments_section}>
      <h3>Комментарии:</h3>
      <div className={styles.comments_section__new_comment}>
        <input
          type="text"
          placeholder="Напишите комментарий..."
          value={newComment}
          onChange={handleCommentChange}
          className={styles.commentInput}
        />
        <button onClick={handleSubmitComment} className={styles.commentButton}>
          Отправить
        </button>
      </div>
      <ul className={styles.comments_section__list}>
        {
          res?.comments.map((comment: Comment) => {
            return <CommentCard key={comment.id} comment={comment}/>
          })
        }
      </ul>
    </div>
  )
}

export default Comments
