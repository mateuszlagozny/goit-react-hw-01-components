import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Profile } from 'components/Profile/Profile';
import user from './components/Profile/user.json';
import Statistics, { Statistic } from './components/Statistics/Statistics';
import data from './components/Statistics/data.json';
import { FriendList } from './components/Friends/FriendList';
import friends from './components/Friends/friends.json';
import { Transaction } from './components/Transaction/Transaction';
import transactions from './components/Transaction/transactions.json';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <Transaction items={transactions}/>
    </App>
  </React.StrictMode>
);
