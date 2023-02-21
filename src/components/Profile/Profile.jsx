/* import user from 'path/to/user.json; */
import css from 'components/Profile/Profile.module.css'

const Profile = ({ username, tag, location, avatar, stats }) => {
   <div className={css.profile}>
       <div className={css.description}>
    <img
               src={avatar}
               alt={username}
               className={css.avatar}
    />
    <p className={css.name}>{username}</p>
    <p className={css.tag}>{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

</div>
}
export default Profile;

// Profile.propTypes = {
//   username: PropTypes.string.isRequired,
//   tag: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   avatar: PropTypes.string.isRequired,
//   stats: PropTypes.shape({
//     followers: PropTypes.number.isRequired,
//     views: PropTypes.number.isRequired,
//     likes: PropTypes.number.isRequired,
// }).isRequired,
// };