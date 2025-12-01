import dayjs from 'dayjs';
import { navIcons, navLinks, WINDOW_CONFIG } from '#constants/index';
import useWindowStore from '#store/window';

const Navbar = () => {
  const { openWindow } = useWindowStore();

  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <p className="font-bold">Tien's Portfolio</p>
        <ul>
          {navLinks.map(({ id, name, type }) => (
            <li
              key={id}
              onClick={() => openWindow(type as keyof typeof WINDOW_CONFIG)}
              className="cursor-pointer"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img src={img} alt={`icon-${id}`} className="icon-hover" />
            </li>
          ))}
        </ul>
        <time>{dayjs().format('ddd MMM D h:mm A')}</time>
      </div>
    </nav>
  );
};

export default Navbar;
