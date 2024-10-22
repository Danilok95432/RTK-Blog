import { useGetCommentsQuery } from '../store/api';
import styles from '../styles/comments/_comments.module.scss'
import { useForm } from 'react-hook-form';
import { Comment } from '../interfaces/interfaces';
import { useParams } from 'react-router-dom';
import CommentCard from './CommentCard';
import { useDispatch } from 'react-redux';
import { CommentForm } from '../interfaces/interfaces';
import { addComment, setComments } from '../store/comments';
import { useEffect } from 'react';

const Comments = () => {
  const { id } = useParams()
  const { data: res } = useGetCommentsQuery(id)
  const dispatch = useDispatch()

  const { register, handleSubmit, reset } = useForm<CommentForm>();

  const onSubmit = (data: CommentForm) => {
    dispatch(addComment(data.comment));
    reset() 
  };

  return(
    <div className={styles.comments_section}>
      <h3>Комментарии:</h3>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.comments_section__new_comment}>
        <input
          type="text"
          placeholder="Напишите комментарий..."
          {...register('comment', { required: 'Это поле обязательно' })}
          className={styles.commentInput}
        />
        <button type="submit" className={styles.commentButton}>
          Отправить
        </button>
      </form>
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
