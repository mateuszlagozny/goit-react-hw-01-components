import styles from './friend.module.css';

export const FriendListItem = (props) => { 
    const correctClass =  props.friends.isOnline === true ? styles.isOnStatus : styles.isOffStatus;
    return (
        <li className={styles.item}>
            <span className={correctClass}></span>
            <img className={styles.avatar} src={props.friends.avatar} alt='' />
            <p className={styles.name}>{props.friends.name}</p>
        </li>
    );
};