import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const FRONT_WEIGHTS = {
  subtitle: { min: 100, max: 400, default: 100 },
  title: { min: 400, max: 900, default: 400 },
};

const renderText = (
  text: string,
  className: string,
  baseWeight: number = 400
) => {
  return [...text].map((char, i) => (
    <span
      key={i}
      className={className}
      style={{ fontVariationSettings: `'wght' ${baseWeight}` }}
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  ));
};

const setupTextHover = (container: HTMLElement, type: 'title' | 'subtitle') => {
  if (!container) return;

  const letters = container.querySelectorAll('span');
  const { min, max, default: base } = FRONT_WEIGHTS[type];

  const animateLetter = (
    letter: HTMLElement,
    weight: number,
    duration = 0.25
  ) => {
    return gsap.to(letter, {
      duration,
      ease: 'power2.out',
      fontVariationSettings: `'wght' ${weight}`,
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    const { left } = container.getBoundingClientRect();
    const mouseX = e.clientX - left;

    letters.forEach((letter) => {
      const { left: l, width: w } = (
        letter as HTMLElement
      ).getBoundingClientRect();
      const distance = Math.abs(mouseX - (l - left + w / 2));
      const intensity = Math.exp(-(distance ** 2 / 2000));

      animateLetter(letter as HTMLElement, min + (max - min) * intensity);
    });
  };
  const handleMouseLeave = () =>
    letters.forEach((letter) =>
      animateLetter(letter as HTMLElement, base, 0.3)
    );

  container.addEventListener('mousemove', handleMouseMove);
  container.addEventListener('mouseleave', handleMouseLeave);

  return () => {
    container.removeEventListener('mousemove', handleMouseMove);
    container.removeEventListener('mouseleave', handleMouseLeave);
  };
};

const Welcome = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    const titleCleanup = setupTextHover(
      titleRef.current as HTMLElement,
      'title'
    );

    const subtitleCleanup = setupTextHover(
      subtitleRef.current as HTMLElement,
      'subtitle'
    );
    return () => {
      titleCleanup?.();
      subtitleCleanup?.();
    };
  }, []);

  return (
    <section id="welcome">
      <p ref={subtitleRef}>
        {renderText(
          "Hey, I'm Tien! Welcome to my",
          'text-3xl font-georama',
          100
        )}
      </p>
      <h1 ref={titleRef} className="mt-7">
        {renderText('portfolio', 'text-9xl italic font-georama')}
      </h1>

      <div className="small-screen">
        <p>This Portfolio is designed for desktop/tablet screens only</p>
      </div>
    </section>
  );
};

export default Welcome;
