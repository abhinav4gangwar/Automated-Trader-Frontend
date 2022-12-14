

import React, { Component } from "react";
import PropTypes from "prop-types";

class ToolTipText extends Component {
	render() {
		return <text
			fontFamily={this.props.fontFamily}
			fontSize={this.props.fontSize}
			{...this.props}
			className="react-stock-charts-tooltip">{this.props.children}</text>;
	}
}

ToolTipText.propTypes = {
	fontFamily: PropTypes.string.isRequired,
	fontSize: PropTypes.number.isRequired,
	children: PropTypes.node.isRequired,
};

ToolTipText.defaultProps = {
	fontFamily: "poppins",
	fontSize: 11,
};

export default ToolTipText;
