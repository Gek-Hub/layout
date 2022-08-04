import './styles/styles.css';

function App() {

  return (
    <div className="App">
      <div className="App-bg" />
      <div className="App-image" />
      <div className='header'>
        <header>
          <div className='panel-top'>
            <div className='link-container'>
              <div className='logo'>
              </div>
              <div className='deck-rating'>
                <div className='deck-icon' />
                Колоды
                <div className='rating-icon' />
                Рейтинг
              </div>
            </div>


            <div className='select-container'>
              <select className='select-container select-languages'>
                <option>ru</option>
                <option>en</option>
              </select>

              <select className="select-container select-accounts">
                <option>Pal Palich</option>
              </select>
            </div>
          </div>
        </header>
        <div className="wellcome">
          <div>
            <p>Welcome to the service for memorizing words in foreign languages using flashcards</p>
          </div>
          <div className='translate-icon' />
          <div>
            <button className="btn-getStart" >Get started</button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
