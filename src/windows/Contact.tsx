import WindowController from '#components/WindowController';
import { socials } from '#constants/index';
import WindowWrapper from '#hoc/WindowWrapper';

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowController target="contact" />
        <h2>Contact me</h2>
      </div>

      <div className="p-5 space-y-5">
        <img
          src="/images/tientran.jpg"
          alt="TienTran"
          className="size-30 rounded-full object-cover"
        />

        <h3>Let's Connect</h3>
        <p>Got an idea? A bug to squash? Or just wanna talk tech? I'm in.</p>
        <p>tientran201@gmail.com</p>
        <ul>
          {socials.map(({ id, bg, link, icon, text }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={text}
              >
                <img src={icon} alt={text} className="size-5 object-cover" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, 'contact');

export default ContactWindow;
