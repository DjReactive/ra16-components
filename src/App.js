import logo from './logo.svg';
import './App.css';
import React from 'react';
import PropTypes from 'prop-types';
import ShopItemModel from './models/ShopItemModel';

function App() {
  const item = {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: 399,
    currency: '£'
  }

  return (
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <ShopItemFunc item={item} />
      </div>
      <div className="window">
        <ShopItemClass item={item} />
      </div>
    </div>
  );
}

function ShopItemFunc(props) {
  const {item} = props;

  const price = item.price.toFixed(2);

  return (
    <div className="main-content">
      <h2>{item.brand}</h2>
      <h1>{item.title}</h1>
      <h3>{item.description}</h3>
      <div className="description">
        {item.descriptionFull}
      </div>
      <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
      <div className="divider"></div>
      <div className="purchase-info">
        <div className="price">{item.currency}{price}</div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  );
}

class ShopItemClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {item} = this.props;

    const price = item.price.toFixed(2);

    return (
      <div className="main-content">
        <h2>{item.brand}</h2>
        <h1>{item.title}</h1>
        <h3>{item.description}</h3>
        <div className="description">
          {item.descriptionFull}
        </div>
        <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
        <div className="divider"></div>
        <div className="purchase-info">
          <div className="price">{item.currency}{price}</div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    );
  }
}

ShopItemClass.propTypes = {
  item: PropTypes.instanceOf(ShopItemModel).isRequired
}

ShopItemFunc.propTypes = {
  item: PropTypes.instanceOf(ShopItemModel).isRequired
}

export default App;
