import { Suspense } from 'react';
import './App.css'
import UserList from './components/UserList'
import Loaders from './constants/Loaders';

function App() {

  return (
    <div className='min-h-screen bg-gray-50'>
      <Suspense fallback={<Loaders />}>
        <UserList />
      </Suspense>
    </div>

  );
};

export default App
