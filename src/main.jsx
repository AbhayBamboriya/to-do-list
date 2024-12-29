import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import ReactDOM.createRootimport { Provider } from 'react-redux'
import { Provider } from 'react-redux'
import store from './store.js'
// (
//         document.getElementById('root')).render(
//         <Provider store={store}> 
//              <App />
//         </Provider>
  

// )

ReactDOM.createRoot(document.getElementById('root')).render(
        <Provider store={store}> 
        <App />
   </Provider>
)