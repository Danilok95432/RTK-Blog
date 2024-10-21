import styles from '../styles/posts/_postcard.module.scss'
import { PostCardProps } from '../interfaces/interfaces';
import { NavLink } from 'react-router-dom';
import UserCard from './UserCard';

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return(
    <NavLink className={styles.link} to={`/posts/${post.id}`}>
      <li className={styles.post_card}>
        <h2 className={styles.post_card__title}>{post.title}</h2>
        <p className={styles.post_card__body}>{post.body}</p>

        <div className={styles.post_card__info}>
          <div className={styles.author}>
            <UserCard id={post?.userId}/>
          </div>
          <div className={styles.post_card__tags}>
          {post.tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              #{tag}
            </span>
          ))}
        </div>
        </div>
      </li>
    </NavLink>
  )
}

export default PostCard