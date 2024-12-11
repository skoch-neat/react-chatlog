import PropTypes from 'prop-types';

const entryData = PropTypes.shape({
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
});

export default entryData;