import { Banner, Navbar } from '../../components';
import { RequestPage } from '../../containers';
/************************************* TYPING */ 
/************************************* VARIABLES */ 
/************************************* EXPORTS */ 
const Request = () => {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main>
        {/*Banner*/}
        <Banner/>
        <RequestPage/>
      </main> 
    </>
  );
}
export default Request;
