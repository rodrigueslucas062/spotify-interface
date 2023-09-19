import renderMainPlay from "../main/Main"
import renderFooter from "../footer/Footer"
import renderAside from "../aside/Aside"

const Home = () => {
    return (
        <div className="h-screen flex flex-col bg-zinc-950">
            <div className="flex flex-1 p-3">
                {/* Aside area*/}
                {renderAside()}
                {/* Main area*/}
                {renderMainPlay()}
            </div>
            <div>
                {renderFooter()}
            </div>
        </div>
    );
}

export default Home;
