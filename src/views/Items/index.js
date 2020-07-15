import React, { Component } from 'react'
import './style.scss'
import { connect } from 'react-redux'
import { fetchItems } from '../../store/itemsReducer/actions'
import { Title, Card } from '../../components'
class Items extends Component {
    componentDidMount = async () => {
        await this.props.fetchItems();
    };

    render() {
        const { items } = this.props

        return (
            <div className="container-items">
                <Title text="Your items" padding="p-lg" />
                {items.map(({ key, title }) => 
                    <Card key={key} title={title} />
                )}
            </div>
        )
    }
}

const mapStateToProps = state => ({ items: state.itemsReducer.items });

export default connect(
    mapStateToProps,
    { fetchItems }
  )(Items)