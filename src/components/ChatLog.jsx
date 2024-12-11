import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import entryData from '../propTypes/propTypes';

const ChatLog = ({ likedMessages = [], entries, onLikeChange = () => { } }) => {
  return (
    <div className="chat-log">
      {entries.map(({ id, sender, body, timeStamp }) => (
        <ChatEntry
          key={id}
          id={id}
          sender={sender}
          body={body}
          timeStamp={timeStamp}
          liked={likedMessages.includes(id)}
          onLikeChange={onLikeChange}
        />
      ))}
    </div>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(entryData).isRequired,
  likedMessages: PropTypes.arrayOf(PropTypes.number),
  onLikeChange: PropTypes.func,
};

export default ChatLog;