import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({
  entries,
  onLikeChange = () => { },
  userColors = { local: 'black', remote: 'black' },
  localUser = '',
  likedMessages = []
}) => (
  <ul className="chat-log">
    {entries.map(({ id, sender, body, timeStamp, liked }) => {
      const isLocal = sender === localUser;
      const textColor = isLocal ? userColors.local : userColors.remote;

      return (
        <ChatEntry
          key={id}
          id={id}
          sender={sender}
          body={body}
          timeStamp={timeStamp}
          liked={likedMessages.includes(id) ? liked : false}
          onLikeChange={onLikeChange}
          isLocal={isLocal}
          style={{ color: textColor }}
        />
      );
    })}
  </ul>
);

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onLikeChange: PropTypes.func,
  userColors: PropTypes.shape({
    local: PropTypes.string,
    remote: PropTypes.string,
  }),
  localUser: PropTypes.string,
  likedMessages: PropTypes.arrayOf(PropTypes.number),
};

export default ChatLog;
