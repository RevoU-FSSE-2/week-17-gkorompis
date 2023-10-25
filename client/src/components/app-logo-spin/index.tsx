import "./index.css";
interface Props {
    height: string
}
const AppLogoSpin = ({height}:Props) => {
    return (
        <>
            <picture className="login-picture">
                <source id ="app-logo-source" media="(max-width:600px)" srcSet="./square6low.png"/>
                <img id="app-logo" className="app-logo" src="./square6.png" alt="a spinning disc" style={{height}} />
                <figcaption><h1>P O R T A L</h1></figcaption>
            </picture> 
        </>
    )
};

export default AppLogoSpin