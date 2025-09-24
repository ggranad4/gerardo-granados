import type { JSX } from 'react';

export function descriptionPresentor(description: string): JSX.Element {
  const descriptions: string[] = description.split(',');
  return (
    <ul className='list-disc list-inside'>
      {descriptions.map((desc, _) => (
        <li key={_}>{desc}</li>
      ))}
    </ul>
  );
}
