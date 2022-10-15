import Header from "../components/Header";
import Scene1 from "../components/Scene1";

export default function App() {
  return (
    <div className='flex flex-col p-0 m-0'>
      <Header />
      <section>
        <Scene1 />
      </section>
    </div>
  );
}
