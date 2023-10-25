import { Banner, Navbar } from '../../components';
import { HomePage } from '../../containers';

/************************************* TYPING */ 
/************************************* VARIABLES */ 
/************************************* EXPORTS */ 
const Home = () => {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main>
        {/*Banner*/}
        <Banner/>
        <HomePage/>
      </main> 
    </>
  );
}
export default Home
