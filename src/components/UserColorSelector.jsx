import PropTypes from 'prop-types';
import './UserColorSelector.css';

const UserColorSelector = ({
  user,
  userType,
  inputColor,
  onColorChange
}) => {
  const colors = ['red', 'orange', 'gold', 'green', 'blue', 'purple'];

  return (
    <div className={`color-selector ${userType}`}>
      <h3 style={{ color: inputColor }}>{`${user}'s color`}</h3>
      <div className="color-buttons">
        {colors.map(color => (
          <button
            key={color}
            onClick={() => onColorChange(color, userType)}
            className={`color-button ${color === inputColor ? 'selected' : ''}`}
            style={{ backgroundColor: color }}
            aria-label={color}
          />
        ))}
      </div>
    </div>
  );
};

UserColorSelector.propTypes = {
  onColorChange: PropTypes.func.isRequired,
  inputColor: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  userType: PropTypes.oneOf(['local', 'remote']).isRequired,
};

export default UserColorSelector;
