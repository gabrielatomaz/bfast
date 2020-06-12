import React, { Component } from 'react'
import './style.scss'
import { connect } from 'react-redux'
import { fetchItems } from '../../store/itemsReducer/actions'

class Items extends Component {
    componentDidMount = async () => {
        await this.props.fetchItems();
    };

    render() {
        const { items } = this.props

        return (
            <div>
                {items.map(item => <div>{item.title}</div>)}
            </div>
        )
    }
}

const mapStateToProps = state => ({ items: state.itemsReducer.items });

export default connect(
    mapStateToProps,
    { fetchItems }
  )(Items)