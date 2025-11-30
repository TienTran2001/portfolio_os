'use client';

import WindowController from '#components/WindowController';
import { techStack } from '#constants/index';
import WindowWrapper from '#hoc/WindowWrapper';
import { Check, Flag } from 'lucide-react';

// tính 1 lần khi module được load (client)
const RENDER_TIME = Math.floor(performance.now() % 100);

const Terminal = () => {
  const totalStacks = techStack.length;

  return (
    <>
      <div id="window-header">
        <WindowController target="terminal" />
        <h2>Tech Stack</h2>
      </div>

      <div className="techstack">
        <p>
          <span className="font-bold">@TienTran % </span>
          show tech stack
        </p>

        <div className="label">
          <p className="w-32">Category</p>
          <p>Technologies</p>
        </div>

        <ul className="content">
          {techStack.map(({ category, items }) => (
            <li key={category} className="flex items-center">
              <Check className="check" size={20} />
              <h3>{category}</h3>
              <ul>
                {items.map((item, i) => (
                  <li key={i}>
                    {item}
                    {i < items.length - 1 ? ',' : ''}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="footnote">
          <p>
            <Check size={20} /> {totalStacks} of {totalStacks} stacks loaded
            successfully (100%)
          </p>

          <p className="text-black flex items-center gap-1">
            <Flag size={15} fill="black" />
            Render time: {RENDER_TIME}ms
          </p>
        </div>
      </div>
    </>
  );
};

const TerminalWindow = WindowWrapper(Terminal, 'terminal');

export default TerminalWindow;
