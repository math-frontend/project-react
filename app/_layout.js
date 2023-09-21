import { Slot } from 'expo-router';
import { Provider } from 'react-redux'
import { store } from '../store'
export default function Layout() {
  return(
    <div>
      <Provider store={store}>
        <Slot />
      </Provider>
    </div>
  );
}
