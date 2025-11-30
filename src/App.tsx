import { Dock, Navbar, Welcome } from '#components/index';
import Terminal from '#windows/Terminal';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
gsap.registerPlugin(Draggable);

function App() {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
    </main>
  );
}

export default App;
