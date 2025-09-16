import ContainerTask from "../components/ContainerTask";
import ContainerCard from "../components/ContarinerCard";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <div className="flex min-h-screen w-full bg-[#818181]/20">
      <Sidebar />
      <div className="flex w-full flex-col gap-6 px-8 pt-16">
        <Header />

        <ContainerCard />

        <ContainerTask>
          <p>text</p>
        </ContainerTask>
      </div>
    </div>
  );
}

export default Home;
