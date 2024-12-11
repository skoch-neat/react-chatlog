import './App.css';
import { useState, useMemo } from 'react';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json';
import { toggleLike } from './utils/utils';

const App = () => {
  const [likedMessages, setLikedMessages] = useState([]);

  const handleLikeChange = (id, liked) => {
    setLikedMessages(prevLikes => toggleLike(prevLikes, id, liked));
  };

  const totalLikes = useMemo(() => likedMessages.length, [likedMessages]);

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <h2>{totalLikes} ❤️s</h2>
      </header>
      <main>
        <ChatLog entries={messages} onLikeChange={handleLikeChange} likedMessages={likedMessages} />
      </main>
    </div>
  );
};

export default App;