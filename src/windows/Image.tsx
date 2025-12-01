import WindowController from '#components/WindowController';
import WindowWrapper from '#hoc/WindowWrapper';
import useWindowStore from '#store/window';

const Image = () => {
  const { windows } = useWindowStore();
  const data = windows.imgfile.data;

  if (!data) return null;

  const { name, imageUrl } = data;

  return (
    <>
      <div id="window-header">
        <WindowController target="imgfile" />
        <h2>{name}</h2>
      </div>

      <div className="bg-white p-6 h-full overflow-y-auto flex items-center justify-center">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={name}
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        )}
      </div>
    </>
  );
};

const ImageWindow = WindowWrapper(Image, 'imgfile');

export default ImageWindow;
