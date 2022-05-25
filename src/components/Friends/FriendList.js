import { FriendListItem } from './FriendListItem';
import styles from './friend.module.css';

export const FriendList = (props) => { 
    return (
        <ul className={styles.friendList}>
            {props.friends.map(friend => { 
                return (
                    <FriendListItem key={friend.id} friends={friend} />
                );
            })}
        </ul>
    );
};