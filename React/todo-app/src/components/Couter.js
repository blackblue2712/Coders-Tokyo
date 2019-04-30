import React, {Component} from 'react';
import { Button } from 'reactstrap';
class Couter extends Component {
    constructor () {
        console.log("Counter constructor");
        super();
        this.state = {
            count: 0
        }
    }

    increase () {
        this.setState ({
            count: this.state.count + 1
        })
    }

    decrease () {
        this.setState ({
            count: this.state.count - 1
        })
    }

    

    componentDidMount () {
        console.log("Couter - Did mount"); // Được gọi khi chuyển thành DOM
    }

    componentDidUpdate () {
        console.log("Couter - Did update"); // Được gọi khi Couter render lại (Thay đổi state, props)
    }

    componentWillUnmount () {
        console.log("Couter - Will unmount"); // Được gọi khi Component sắp được xóa
    }

    shouldComponentUpdate (nextProps, nextState) {
        // Mặc định return true
        // Dùng khi App render nhưng không thay đổi couter
        // Để không phải render lại counter (Vì app render là render lại tất cả trong coutner)

        if(this.state.count === nextState.count) {
            return false;
        }
        return true;
    }

    render () {
        console.log("Counter render");
        return (
            <div className="counter">
                <Button outline color="secondary" onClick={ () => this.increase() }>+</Button>
                <span >{this.state.count}</span>
                <Button outline color="secondary" onClick={ () => this.decrease() }>-</Button>
            </div>
        )
    }
}

export default Couter;