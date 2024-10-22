import { CommentCardProps } from "../interfaces/interfaces";
import styles from "../styles/comments/_comments.module.scss";
import UserCard from "./UserCard";

const CommentCard: React.FC<CommentCardProps> = ({ comment }) => {
  return (
    <li className={styles.comment}>
      <UserCard id={comment.user.id} />
      <div className={styles.comment__content}>
        <p>{comment.body}</p>
      </div>

      <div className={styles.comment__info}>
        <div className={styles.reactions}>
          <span>
            <span className={styles.likes}>
              <svg
                width="25px"
                height="25px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.4382 2.77841C12.2931 2.73181 12.1345 2.74311 11.9998 2.80804C11.8523 2.87913 11.7548 3.0032 11.7197 3.13821L11.244 4.97206C11.0777 5.61339 10.8354 6.23198 10.5235 6.81599C10.0392 7.72267 9.30632 8.42 8.62647 9.00585L7.18773 10.2456C6.96475 10.4378 6.8474 10.7258 6.87282 11.0198L7.68498 20.4125C7.72601 20.887 8.12244 21.25 8.59635 21.25H13.245C16.3813 21.25 19.0238 19.0677 19.5306 16.1371L20.2361 12.0574C20.3332 11.4959 19.9014 10.9842 19.3348 10.9842H14.1537C13.1766 10.9842 12.4344 10.1076 12.5921 9.14471L13.2548 5.10015C13.3456 4.54613 13.3197 3.97923 13.1787 3.43584C13.1072 3.16009 12.8896 2.92342 12.5832 2.82498L12.4382 2.77841L12.6676 2.06435L12.4382 2.77841ZM11.3486 1.45674C11.8312 1.2242 12.3873 1.18654 12.897 1.35029L13.042 1.39686L12.8126 2.11092L13.042 1.39686C13.819 1.64648 14.4252 2.26719 14.6307 3.0592C14.8241 3.80477 14.8596 4.58256 14.7351 5.34268L14.0724 9.38724C14.0639 9.439 14.1038 9.4842 14.1537 9.4842H19.3348C20.8341 9.4842 21.9695 10.8365 21.7142 12.313L21.0087 16.3928C20.3708 20.081 17.0712 22.75 13.245 22.75H8.59635C7.3427 22.75 6.29852 21.7902 6.19056 20.5417L5.3784 11.149C5.31149 10.3753 5.62022 9.61631 6.20855 9.10933L7.64729 7.86954C8.3025 7.30492 8.85404 6.75767 9.20042 6.10924C9.45699 5.62892 9.65573 5.12107 9.79208 4.59542L10.2678 2.76157C10.417 2.18627 10.8166 1.71309 11.3486 1.45674ZM2.96767 9.4849C3.36893 9.46758 3.71261 9.76945 3.74721 10.1696L4.71881 21.4061C4.78122 22.1279 4.21268 22.75 3.48671 22.75C2.80289 22.75 2.25 22.1953 2.25 21.5127V10.2342C2.25 9.83256 2.5664 9.50221 2.96767 9.4849Z"
                    fill="#000000"
                  />
                </g>
              </svg>
              {comment?.likes}
            </span>
            <span className={styles.dislikes}>
              <svg
                width="25px"
                height="25px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.4382 21.2216C12.2931 21.2682 12.1345 21.2569 11.9998 21.192C11.8523 21.1209 11.7548 20.9968 11.7197 20.8618L11.244 19.0279C11.0777 18.3866 10.8354 17.768 10.5235 17.184C10.0392 16.2773 9.30632 15.58 8.62647 14.9942L7.18773 13.7544C6.96475 13.5622 6.8474 13.2742 6.87282 12.9802L7.68498 3.58754C7.72601 3.11303 8.12244 2.75 8.59635 2.75H13.245C16.3813 2.75 19.0238 4.93226 19.5306 7.86285L20.2361 11.9426C20.3332 12.5041 19.9014 13.0158 19.3348 13.0158H14.1537C13.1766 13.0158 12.4344 13.8924 12.5921 14.8553L13.2548 18.8998C13.3456 19.4539 13.3197 20.0208 13.1787 20.5642C13.1072 20.8399 12.8896 21.0766 12.5832 21.175L12.4382 21.2216L12.6676 21.9356L12.4382 21.2216ZM11.3486 22.5433C11.8312 22.7758 12.3873 22.8135 12.897 22.6497L13.042 22.6031L12.8126 21.8891L13.042 22.6031C13.819 22.3535 14.4252 21.7328 14.6307 20.9408C14.8241 20.1952 14.8596 19.4174 14.7351 18.6573L14.0724 14.6128C14.0639 14.561 14.1038 14.5158 14.1537 14.5158H19.3348C20.8341 14.5158 21.9695 13.1635 21.7142 11.687L21.0087 7.60725C20.3708 3.91896 17.0712 1.25 13.245 1.25H8.59635C7.3427 1.25 6.29852 2.20975 6.19056 3.45832L5.3784 12.851C5.31149 13.6247 5.62022 14.3837 6.20855 14.8907L7.64729 16.1305C8.3025 16.6951 8.85404 17.2423 9.20042 17.8908C9.45699 18.3711 9.65573 18.8789 9.79208 19.4046L10.2678 21.2384C10.417 21.8137 10.8166 22.2869 11.3486 22.5433ZM2.96767 14.5151C3.36893 14.5324 3.71261 14.2306 3.74721 13.8304L4.71881 2.59389C4.78122 1.8721 4.21268 1.25 3.48671 1.25C2.80289 1.25 2.25 1.80474 2.25 2.48726V13.7658C2.25 14.1674 2.5664 14.4978 2.96767 14.5151Z"
                    fill="#000000"
                  />
                </g>
              </svg>
              {comment?.dislikes}
            </span>
          </span>
        </div>
      </div>
    </li>
  );
};

export default CommentCard;
