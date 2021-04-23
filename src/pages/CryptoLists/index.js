import { useContext } from 'react';
import CartContext from '../../context/cart';
import './style.css';

export default function CryptoLists() {
  const { cart, setCart } = useContext(CartContext);

  return (
    <div>
      <div className="topMove-header">
        <h4>Top Move</h4>
      </div>
      <div className="lists-cryptolist">
        <div className="lists-crypto-topMove ">
          <div>
            <img className="lists-img-topMove" src={cart[5].picture}></img>
          </div>
          <div className="topMove">
            <div>{cart[5].name}</div>
            <div>${cart[5].price}</div>
            <div>{cart[5].changePerDay}</div>
          </div>
        </div>
        <div className="lists-crypto-topMove ">
          <div>
            <img className="lists-img-topMove" src={cart[8].picture}></img>
          </div>
          <div className="topMove">
            <div>{cart[8].name}</div>
            <div>${cart[8].price}</div>
            <div>{cart[8].changePerDay}</div>
          </div>
        </div>
        <div className="lists-crypto-topMove ">
          <div>
            <img className="lists-img-topMove" src={cart[3].picture}></img>
          </div>
          <div className="topMove">
            <div>{cart[3].name}</div>
            <div>${cart[3].price}</div>
            <div>{cart[3].changePerDay}</div>
          </div>
        </div>
        <div className="lists-crypto-topMove ">
          <div>
            <img className="lists-img-topMove" src={cart[2].picture}></img>
          </div>
          <div className="topMove">
            <div>{cart[2].name}</div>
            <div>${cart[2].price}</div>
            <div>{cart[2].changePerDay}</div>
          </div>
        </div>
      </div>
      <div className="lists-header-cryptolist">
        <div className="lists-crypto1-crptolist">
          <div style={{ marginLeft: '15%' }}>Name</div>
          <div style={{ marginLeft: '19%' }}>Price</div>
          <div style={{ marginLeft: '8%' }}>24H Change</div>
          <div style={{ marginLeft: '8%' }}>24H Volumn</div>
          <div style={{ marginLeft: '8%' }}>Update Date</div>
        </div>
        <div>
          {cart.map((data, index) => {
            return (
              <div key={index} className="lists-crypto2">
                <div style={{ width: '5%', marginLeft: '3%' }}>{index + 1}</div>
                <div style={{ width: '5%' }}>
                  <img className="lists-img" src={data.picture}></img>
                </div>
                <div style={{ width: '10%', marginLeft: '1%' }}>
                  {data.name}
                </div>
                <div style={{ width: '10%', marginLeft: '1%' }}>
                  {data.shortName}
                </div>
                <div style={{ width: '10%', marginLeft: '2%' }}>
                  ${data.price}
                </div>
                <div style={{ width: '10%', marginLeft: '1%' }}>
                  {data.changePerDay}
                </div>
                <div style={{ width: '10%', marginLeft: '5%' }}>
                  {data.volumnPerDay}
                </div>
                <div style={{ width: '1%', marginLeft: '6%' }}>
                  {data.updateDate}
                </div>
                <div style={{ width: '5%', marginLeft: '1%' }}>
                  <button className="lists-btn-crypto">Trade</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
