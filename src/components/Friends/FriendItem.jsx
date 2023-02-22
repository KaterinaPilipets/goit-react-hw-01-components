import css from 'components/Friends/FriendList.module.css'
import PropTypes from 'prop-types'

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (<li className={css.item}>
        <span className={`${css.status} ${isOnline && css.online}`}></span>     
                <img className={css.avatar} src={avatar} alt={name} width="48" />
                <p className={css.name}>{name}</p>
            </li>)
            }
        
export default FriendListItem

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}