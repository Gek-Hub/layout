import './styles/App.css';

function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <div className='panel-top'>
          <div>
            <img src='./image/icon/logo.png' alt='logo'/>
          </div>
          <div>
            <div>
              <img src='./image/icon/store.png' alt='store'/>
              Колоды
            </div>
            <div>
              <img src='./image/icon/favorites.png' alt='favorites'/>
              Рейтинг
            </div>

          </div>
          <div>
            <select>
              <option>ru</option>
              <option>en</option>
            </select>
          </div>
          <div>
            <select>
              <option>Pal Palich</option>
            </select>
          </div>
        </div>
        
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

        <div className="App-image">
          <img src="./image/woman.svg" alt='woman'/>
        </div>

      </div>
    </div>
  );
}

export default App;
