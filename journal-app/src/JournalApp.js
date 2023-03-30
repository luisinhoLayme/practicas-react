import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import AppRouter from './routers/AppRouter';

const JournalApp = () => {
  return (
    <Provider store={ store }>
      <AppRouter />

      {/* You are in video 20   */}
    </Provider>
  )
}


export default JournalApp
