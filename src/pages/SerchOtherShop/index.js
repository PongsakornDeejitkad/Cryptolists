import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import cartsContext from '../../context/cart';
import './style.css';

export default function SerchOtherShop() {
  const { otherShop } = useContext(cartsContext);

  const [serchName, setSerchName] = useState('');
  const [filter, setFilter] = useState([]);
  const [commentOther, setCommentOther] = useState([]);

  /////////////////////////////////////////////////////////////////////////////////////
  const hidden = {
    display: 'none',
  };
  const [modals, setModals] = useState(hidden);
  const [overlay, setOverlay] = useState(hidden);

  const closeModal = {
    position: 'absolute',
    top: '1.2rem',
    right: '2rem',
    fontSize: '2rem',
    color: '#333',
    cursor: 'pointer',
    border: 'none',
    background: 'none',
  };

  const openModal = {
    position: 'absolute',
    top: '10%',
    left: '40%',
    transform: 'translate(-50%, 0%)',
    width: '70%',

    backgroundColor: 'white',
    padding: '6rem',
    borderRadius: '5px',
    boxShadow: '0 3rem 5rem rgba(0, 0, 0, 0.3)',
    zIndex: '10',
  };

  const openOverlay = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '400%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    backdropFilter: 'blur(3px)',
    zIndex: '5',
  };

  const close = () => {
    setModals(hidden);
    setOverlay(hidden);
  };

  /////////////////////////////////////////////////////////////////////////////////////

  const submit = event => {
    event.preventDefault();
    let afterFilter = otherShop.filter(
      mov =>
        mov.name.toLocaleLowerCase().trim().split(' ').join('') ===
        serchName.toLocaleLowerCase().trim().split(' ').join('')
    );

    try {
      if (afterFilter[0].id === undefined);
    } catch (error) {
      return alert('Shop not found');
    }
    setFilter(afterFilter);

    if (!serchName) {
      alert('Please fill full');
    } else {
      fetch('https://my-shop.zenon.si//comments?shop_id=' + afterFilter[0].id)
        .then(response => response.json())
        .then(data => {
          setCommentOther(data);
        });
      setModals(openModal);
      setOverlay(openOverlay);
    }
  };

  return (
    <div className="search-header">
      <div>
        <form className="search-header-form " onSubmit={submit}>
          <input
            type="search"
            value={serchName}
            onChange={event => setSerchName(event.target.value)}
            placeholder="Shop Name"
            className="form-control search-header-form-input"
          />

          <button className="btn btn-light">Search</button>
        </form>
      </div>
      <div className="otherShopLists" style={modals}>
        <button style={closeModal} onClick={close}>
          &times;
        </button>
        <div>
          {filter.map((data, index) => {
            return (
              <div key={index}>
                <div className="search-lists">{data.name}</div>
                <div>{data.Description}</div>
                <div>Rating : {data.rating}</div>
                <div>{data.url}</div>
              </div>
            );
          })}
        </div>
        <div>
          {commentOther.map((data, index) => {
            return (
              <div key={index}>
                <div className="search-comment">{data.author}</div>
                <div>{data.comment}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div style={overlay}></div>
    </div>
  );
}
