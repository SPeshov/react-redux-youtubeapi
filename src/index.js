import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDVHDuZe6AkWkx5sGbjFAbQy5zQlk6JEpE';

// 
const App = () => {
return (
    <div> 
        <SearchBar />
    </div>
    );
}
//

ReactDOM.render(<App />, document.querySelector('.container'));