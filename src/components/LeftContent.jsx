import PropTypes from 'prop-types';

const LeftContent = ({ children }) => {
	return (
		<div className="left_content">{ children }</div>
	);
};

LeftContent.propTypes = {
  children: PropTypes.node.isRequired
};

export default LeftContent;
