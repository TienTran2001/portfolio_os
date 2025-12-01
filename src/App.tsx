import { Dock, Navbar, Welcome } from '#components/index';
import { Terminal, Safari, Resume, Finder, Text, Image } from '#windows/index';
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
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
    </main>
  );
}

export default App;
