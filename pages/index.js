import renderMainPlay from "../components/Home/Main"
import renderFooter from "../components/Home/Footer"
import renderAside from "../components/Home/Aside"
// import Home from "../components/Home/Home";

const index = () => {
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
};

export default index;
