import './styles/styles.css';

function App() {
  return (
    <div className="App">
      
      <div className='header'>
        <header>
          <div className='panel-top'>
            <div className='logo'>
            </div>
            <div className='deck-rating'>
              <div>
                <img src='./image/icon/store.png' alt='store'/>
                Колоды
              </div>
              <div>
                <img src='./image/icon/favorites.png' alt='favorites'/>
                Рейтинг
              </div>

            </div>
            <div className="languages">
              <select>
                <option>ru</option>
                <option>en</option>
              </select>
            </div>
            <div className="accounts">
              <select>
                <option>Pal Palich</option>
              </select>
            </div>
          </div>
        </header>
        <div className="wellcome">
          <div>
            <p>Welcome to the service for memorizing words in foreign languages using flashcards</p>
          </div>
          <div>
            <img src="image/china.png" alt="translate-icon" />
          </div>
          <div>
            <button className="btn-getStart" >Get started</button>
          </div>
        </div>

      </div>
      <div className="App-image">
      </div>
    </div>
  );
}

export default App;
