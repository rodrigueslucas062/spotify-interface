import renderMainPlay from "../main/Main"
import renderFooter from "../footer/Footer"
import renderAside from "../aside/Aside"

const Home = () => {
    return (
        <div className="h-screen flex flex-col">
            <div className="flex flex-1">
                {/* Aside area*/}
                {renderAside()}
                {/* Main area*/}
                {renderMainPlay()}
            </div>
            {renderFooter()}
        </div>
    )
}
export default Home