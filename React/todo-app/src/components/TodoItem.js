import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TodoItem.css';
import checkImg from '../image/check.svg';
import checkCompleteImg from '../image/check-complete.svg';

class TodoItem extends Component {
    render () {
        const { item, onClick } = this.props;
        let className = "TodoItem";
        let urlImg = checkImg;
        if (item.isComplete) {
            className += " TodoItem-complete";
            urlImg = checkCompleteImg;
        }
        
        return (
            <div onClick={onClick} className={className}>
                <img src={urlImg} alt={'none'} width={32} height={32}/>
                <p>{item.title}</p>
            </div>
        );
    }
}

TodoItem.propTypes = {
    item: PropTypes.shape({
        isComplete: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired
    }),
    onClick: PropTypes.func
}

export default TodoItem;