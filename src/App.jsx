import './App.css';
import { useState, useMemo, Fragment } from 'react';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json';
import UserColorSelector from './components/UserColorSelector';

const App = () => {
  const [entries, setEntryData] = useState(messages);
  const participants = [...new Set(entries.map(message => message.sender))];
  const [userColors, setUserColors] = useState({
    local: 'green',
    remote: 'blue'
  });

  const localUser = entries[0]?.sender;
  const remoteUser = participants.find(user => user !== localUser);

  const generateChatTitle = () => `Chat Between ${localUser} and ${remoteUser}`;

  const handleColorChange = (color, userType) => {
    setUserColors(prevColors => ({
      ...prevColors,
      [userType]: color
    }));
  };

  const handleLikeChange = (id, liked) => {
    setEntryData(entries => entries.map(message =>
      message.id === id
        ? { ...message, liked }
        : message));
  };

  const totalLikes = useMemo(() =>
    entries.filter(message => message.liked).length, [entries]);

  const likedMessages = entries.filter(message => message.liked).map(message => message.id);

  return (
    <div id="App">
      <header>
        <h1>{generateChatTitle()}</h1>
        <h2 className="subheading">
          {participants.map((user, index) => (
            <Fragment key={`${user}-${index}`}>
              <UserColorSelector
                user={user}
                userType={user === localUser ? 'local' : 'remote'}
                inputColor={userColors[user === localUser ? 'local' : 'remote']}
                onColorChange={handleColorChange}
              />
              {index === 0 && <p className="likes">{totalLikes} ❤️s</p>}
            </Fragment>
          ))}
        </h2>
      </header>
      <main>
        <ChatLog
          entries={entries}
          onLikeChange={handleLikeChange}
          userColors={userColors}
          localUser={localUser}
          likedMessages={likedMessages}
        />
      </main>
    </div>
  );
};

export default App;