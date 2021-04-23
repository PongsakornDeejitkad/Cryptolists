import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import cartsContext from '../../context/cart';
import './style.css';

export default function Feature2() {
  return (
    <div className="fri">
      <div className="friends-header">You May Also Like</div>

      <div className="friends">
        <div className="friends-shop">
          <div className="friends-shop-lists-feature2">
            <img
              className="friends-shop-picture"
              src="https://shop-camt-bootcamp.pair-co.com:3000/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBHdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--3c1fb634bb34eb4faef6c9218600ed3f29a18089/photo-1616388761757-9ef5aa81724e.jpg"
            ></img>
            <div>CoMachine</div>
            <div>ขายทุกยกเว้นกาเเฟ</div>
            <button className="btn-text-feature2">details </button>
          </div>
          <div className="friends-shop-lists-feature2">
            <img className="friends-shop-picture" src=""></img>
            <div>Shop name 6</div>
            <div>Description 6</div>
            <button className="btn-text-feature2">details </button>
          </div>
          <div className="friends-shop-lists-feature2">
            <img className="friends-shop-picture" src=""></img>
            <div>Shop name 8</div>
            <div>Description 8</div>
            <button className="btn-text-feature2">details </button>
          </div>
          <div className="friends-shop-lists-feature2">
            <img className="friends-shop-picture" src=""></img>
            <div>Shop name 9</div>
            <div>Description 9</div>
            <button className="btn-text-feature2">details </button>
          </div>
        </div>
      </div>
      <div className="lists-btn-serch4">
        <Link to="/OtherShop">
          <button className="lists-btn-feature2 lists-btn-serch5">
            Look for others shop
          </button>
        </Link>
      </div>
    </div>
  );
}
