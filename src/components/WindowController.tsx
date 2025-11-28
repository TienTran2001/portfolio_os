import { WINDOW_CONFIG } from '#constants/index';
import useWindowStore from '#store/window';

const WindowController = ({
  target,
}: {
  target: keyof typeof WINDOW_CONFIG;
}) => {
  const { closeWindow } = useWindowStore();
  return (
    <div id="window-controls">
      <div className="close" onClick={() => closeWindow(target)} />
      <div className="minimize" />
      <div className="maximize" />
    </div>
  );
};

export default WindowController;
