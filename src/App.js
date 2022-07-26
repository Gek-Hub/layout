import './styles/styles.css';

function App() {
  return (
    <div className="App">
      <div className="App-image"/>
      <div className='header'>
        <header>
          <div className='panel-top'>
            <div className='logo'>
            </div>
            <div className='deck-rating'> 
              Колоды Рейтинг
            </div>
            <div className='deck-icon'/>
            <div className='rating-icon'/>
             
            
            <div > 
              <select className='select-languages'>
                <option>ru</option>
                <option>en</option>
              </select>
            </div>
            <div>
              <select className="select-accounts">
                <option>Pal Palich</option>
              </select>
            </div>
          </div>
        </header>
        <div className="wellcome">
          <div>
            <p>Welcome to the service for memorizing words in foreign languages using flashcards</p>
          </div>
          <div className='translate-icon'/>
          <div>
            <button className="btn-getStart" >Get started</button>
          </div>
        </div>

      </div>
      
    </div>
  );
}

export default App;
