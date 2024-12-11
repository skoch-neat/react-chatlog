import './App.css';
import { useState, useMemo } from 'react';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json';
import { toggleLike } from './utils/utils';

const App = () => {
  const localUser = messages[0].sender;
  const participants = [...new Set(messages.map(msg => msg.sender))];
  const title = `Chat Between ${participants.join(' and ')}`;

  const [likedMessages, setLikedMessages] = useState([]);
  const totalLikes = useMemo(() => likedMessages.length, [likedMessages]);
  const handleLikeChange = (id, liked) => {
    setLikedMessages(prevLikes => toggleLike(prevLikes, id, liked));
  };

  return (
    <div id="App">
      <header>
        <h1>{title}</h1>
        <h2>{totalLikes} ❤️s</h2>
      </header>
      <main>
        <ChatLog
          entries={messages}
          onLikeChange={handleLikeChange}
          likedMessages={likedMessages}
          localUser={localUser}
        />
      </main>
    </div>
  );
};

export default App;