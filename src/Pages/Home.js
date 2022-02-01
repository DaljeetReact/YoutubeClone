import React,{useContext} from 'react';
import { Store } from '../Store'
function Home(props) {
    const data = useContext(Store);
  return <div>Home</div>;
}

export default Home;
