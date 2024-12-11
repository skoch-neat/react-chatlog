import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import entryData from '../propTypes/propTypes';

const ChatLog = ({ likedMessages = [], entries, onLikeChange = () => { }, localUser }) => {
  return (
    <div className="chat-log">
      {entries.map(({ id, sender, body, timeStamp }) => {
        const isLocal = sender === localUser;

        return (
          <ChatEntry
            key={id}
            id={id}
            sender={sender}
            body={body}
            timeStamp={timeStamp}
            liked={likedMessages.includes(id)}
            onLikeChange={onLikeChange}
            isLocal={isLocal}
          />
        );
      })}
    </div>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(entryData).isRequired,
  likedMessages: PropTypes.arrayOf(PropTypes.number),
  onLikeChange: PropTypes.func,
  localUser: PropTypes.string.isRequired,
};

export default ChatLog;