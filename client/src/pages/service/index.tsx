import { Banner, Navbar } from '../../components';
import { ServicePage } from '../../containers';
/************************************* TYPING */ 
/************************************* VARIABLES */ 
/************************************* EXPORTS */ 
const Service = () => {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main>
        {/*Banner*/}
        <Banner/>
        <ServicePage/>
      </main> 
    </>
  );
}
export default Service;
