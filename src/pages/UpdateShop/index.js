import { useState, useEffect } from 'react';
import './style.css';

export default function UpdateShop() {
  const [newName, setNewname] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newUrl, setNewUrl] = useState('');
  const [oldData, setOldData] = useState([]);
  const [picture, savePicture] = useState([]);
  useEffect(() => {
    fetch('https://my-shop.zenon.si/shops/7')
      .then(response => response.json())
      .then(data => {});
  }, []);

  const submit = event => {
    event.preventDefault();
    if (!newName) {
      alert('Please enter your name');
    } else if (!newDescription) {
      alert('Please enter your Description');
    } else if (!newUrl) {
      alert('Please enter your Url');
    } else {
      fetch('https://my-shop.zenon.si/shops/7', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: newName,
          description: newDescription,
          url: newUrl,
        }),
      })
        .then(response => response.json())
        .then(() => {
          alert('Update Complete');
        });
    }
  };

  const savePictures = (event, value) => {
    event.preventDefault();
    value = event.target.files[0];
    console.log('value', value);
    const formData = new FormData();
    formData.append('name', { newName });
    formData.append('description', { newDescription });
    formData.append('url', { newUrl });
    formData.append('image', value);

    console.log('formData', formData);
    console.log('value', value);
    console.log('value{}', { value });
    console.log('event.target.files[0]', event.target.files[0]);
    fetch('https://my-shop.zenon.si/shops/7', {
      method: 'PUT',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    })
      .then(response => response.json())
      .then(() => {});
  };
  //https://cryptolists-107f4.web.app

  return (
    <div className="lists-header1">
      <div className="lists-header2">
        <div>
          <div className="lists-header-crypto">CRYPTOLISTS</div>
          <div className="lists-header-oldData">
            <div>
              <img
                className="lists-header-picture2"
                src="{oldData.image}"
              ></img>
            </div>
            <div>Name : {oldData.name}</div>
            <div>Descriptions : {oldData.description}</div>
            <div>URL : {oldData.url}</div>
          </div>
        </div>
        <div>
          <div className="lists-header-crypto">UPDATE DATA</div>
          <div>
            <form onSubmit={submit}>
              <div>
                <label>Name :</label>
                <input
                  type="text"
                  value={newName}
                  onChange={event => setNewname(event.target.value)}
                  className="update-input"
                />
              </div>
              <div>
                <label>Description :</label>
                <textarea
                  type="text"
                  value={newDescription}
                  onChange={event => setNewDescription(event.target.value)}
                  className="update-input"
                />
              </div>
              <div>
                <label>URL :</label>
                <input
                  type="text"
                  value={newUrl}
                  onChange={event => setNewUrl(event.target.value)}
                  className="update-input"
                />
              </div>
              <div>
                <input
                  type="file"
                  onChange={savePictures}
                  className="update-inputfile"
                />
              </div>

              <button className="lists-btn-update">Update Data</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
