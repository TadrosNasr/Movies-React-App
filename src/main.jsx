// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import MoviesProvider from './context/AppContext.jsx';
import { Provider } from 'react-redux';
import favouriteSlice from './redux/store/slices/FavouriteSlice.js';
import { store } from './redux/store/store.js';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <MoviesProvider>
      <App />
    </MoviesProvider>
  </Provider>
)
