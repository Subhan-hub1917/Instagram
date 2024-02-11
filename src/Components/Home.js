import Info from "./Home_parts/Info";
import Menu from "./Home_parts/Menu";
import Main from "./Home_parts/Main";
const Home = () => {
    return ( 
        <div className="container-fluid ">
            <div className="row justify-content-between ">
                    <Menu/>
                    <Main/>
                    <Info/>
            </div>  
        </div>
     );
}
 
export default Home;