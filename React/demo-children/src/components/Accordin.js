import React, {Component} from 'react';

class Accordin extends Component {
    constructor () {
        super();
        this.state = {
            isCollapsed: true
        }
        this.onClick = this.onClick.bind(this);
    }
    onClick () {
        this.setState({
            isCollapsed: !this.state.isCollapsed
        })
    }
    render () {
        const { isCollapsed } = this.state;
        const { heading, children } = this.props;
        return (
            <div className="Accordin">
                <div className="Heading" onClick={this.onClick}>{heading}</div>
                {!isCollapsed && <div className="Content">{children}</div>}
            </div>
        )
    }
}

export default Accordin;