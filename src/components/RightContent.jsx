import PropTypes from 'prop-types';

const RightContent = ({ children }) => {
	return (
		<div className="right_content">{ children }</div>
	);
};

RightContent.propTypes = {
  children: PropTypes.node.isRequired
};

export default RightContent;
