import css from 'components/Friends/FriendList.module.css'
import FriendListItem from './FriendItem'
import PropTypes from 'prop-types'
const FriendList = ({friends}) => {
    return (<ul className={css.friendList} >
        {friends.map(({ avatar, name, isOnline, id })=>{
            return <FriendListItem
                key={id}
                avatar={avatar}
                name={name}
                isOnline={isOnline}
            />
        })}
    </ul>)
}
export default FriendList
FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object)
}