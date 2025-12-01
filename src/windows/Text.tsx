import WindowController from '#components/WindowController';
import WindowWrapper from '#hoc/WindowWrapper';
import useWindowStore from '#store/window';

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows.txtfile.data;

  if (!data) return null;

  const { name, image, subtitle, description } = data;

  return (
    <>
      <div id="window-header">
        <WindowController target="txtfile" />
        <h2>{name}</h2>
      </div>

      <div className="bg-white p-6 h-full overflow-y-auto">
        {image && (
          <div className="mb-6">
            <img
              src={image}
              alt={name}
              className="w-full max-w-md mx-auto rounded-lg"
            />
          </div>
        )}

        {subtitle && (
          <h3 className="text-2xl font-semibold mb-4">{subtitle}</h3>
        )}

        {description && description.length > 0 && (
          <div className="space-y-4">
            {description.map((paragraph: string, index: number) => (
              <p key={index} className="text-base leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, 'txtfile');

export default TextWindow;
