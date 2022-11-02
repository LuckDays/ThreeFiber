import Header from "../components/Header";
import Scene1 from "../components/Scene1";

export default function App() {
  return (
    <div className='relative flex flex-col p-0 m-0'>
      <Header />
      <section>
        <Scene1 />
      </section>
      <a
        className='absolute rounded-full bottom-5 right-5 px-6 py-4 bg-white text-black font-semibold text-md'
        href='#header'
      >
        scroll up
      </a>
    </div>
  );
}
