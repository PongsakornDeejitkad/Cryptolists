import { useEffect, useState } from 'react';
import './style.css';
import picture from '../../assets/images/digital.jpg';
export default function Features() {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState('');

  const [feedback, setfeedback] = useState([]);
  const [averageRating, setAverageRating] = useState([]);

  const submit = event => {
    event.preventDefault();
    if (!name) {
      alert('Please enter your name');
    } else if (!comment) {
      alert('Please enter your comment');
    } else if (!rating) {
      alert('Please enter your rating');
    } else {
      fetch('https://my-shop.zenon.si/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          shop_id: 7,
          author: name,
          comment,
          rating,
        }),
      })
        .then(response => response.json())
        .then(data => {
          alert('Thank for your feedback');
        });

      setName('');
      setComment('');
      setRating('');
    }
  };

  useEffect(() => {
    fetch('https://my-shop.zenon.si//comments?shop_id=7')
      .then(response => response.json())
      .then(data => {
        console.log('data feedback', data);
        setfeedback(data);
        const average = data.reduce((acc, cur) => {
          acc = acc + cur.rating;

          return acc;
        }, 0);
        setAverageRating((average / data.length).toFixed(1));
      });
  }, []);

  //----------------------------------------------make popup---------------------------------------------
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
    top: '250%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
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
    height: '500%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    backdropFilter: 'blur(3px)',
    zIndex: '5',
  };

  const showComments = () => {
    setModals(openModal);
    setOverlay(openOverlay);
  };
  const close = () => {
    setModals(hidden);
    setOverlay(hidden);
  };

  //////////////////////////////////////////////////////////////////
  return (
    <div className="header">
      <div className="header-head">
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec
          finibus lorem.
        </h3>
      </div>
      <div className="subHeader">
        <div>
          <img src={picture} class="features-img "></img>
        </div>
        <div className="subHeader2">
          <div className="header-rec ">
            <h2>Recommend Us</h2>
            <span className="header-rec-span">
              ( Rating : {averageRating} )
            </span>
          </div>

          {/* add commnet */}
          <div className="header-form ">
            <form onSubmit={submit}>
              <div>
                <label>Name :</label>
                <input
                  type="text"
                  value={name}
                  onChange={event => setName(event.target.value)}
                  className="header-form-input"
                />
              </div>
              <div>
                <label>Comment :</label>
                <textarea
                  type="text"
                  value={comment}
                  onChange={event => setComment(event.target.value)}
                  className="header-form-input"
                />
              </div>
              <div>
                <label>Rating :</label>
                <input
                  type="number"
                  value={rating}
                  onChange={event => setRating(event.target.value)}
                  min="0"
                  max="5"
                  className="header-form-input"
                />
              </div>
              <button className="lists-btn-feature  lists-btn-send">
                send
              </button>
            </form>
          </div>
          {/* show Comment */}
          <button className="lists-btn-feature" onClick={showComments}>
            View all comments
          </button>
        </div>
      </div>
      <div style={modals}>
        <button style={closeModal} onClick={close}>
          &times;
        </button>
        <div>
          <h2 className="feature-comment-header">All Comments</h2>
        </div>
        {feedback.map((data, index) => {
          return (
            <div className="feature-comment" key={index}>
              <div className="feature-comment-name">{data.author}</div>
              <div>{data.comment}</div>
              <div>Rating : {data.rating}</div>
              <div className="feature-comment-date">{data.created_at}</div>
            </div>
          );
        })}
      </div>
      <div style={overlay}></div>
    </div>
  );
}
