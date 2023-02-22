import user from 'components/Profile/user.json'
import data from 'components/Statistics/data.json'
import friends from 'components/Friends/friends.json'
import transactions from 'components/TransactionHistory/transactions'
import Profile from 'components/Profile/Profile'
import Statistics from 'components/Statistics/Statistics';
import FriendList from './Friends/FriendList'
import TransactionHistory from './TransactionHistory/TransactionHistory'
export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '20px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding:'20px'
        }}
    >
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
    <Statistics stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions}/>

    </div>
  )
}



