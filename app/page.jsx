
import Card from "./Components/Card";
import CategoryList from "./Components/CategoryList/CategoryList";
import AllRoutes from "./Routes/AllRoutes";


export default function Home() {
  return (
    <div className="">
      <h1 className="text-5xl my-4 px-4 text-center">All Prompts</h1>
      <p className="text-xl my-4 px-4 text-center">Explore Swanirbhar's AI Prompts</p>
        <AllRoutes/>
    </div>

  );
}
