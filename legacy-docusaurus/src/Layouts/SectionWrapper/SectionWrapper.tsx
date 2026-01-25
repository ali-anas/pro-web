import React from 'react';

type SectionWraperProps = {
  sectionHeading?: string;
  children: React.ReactNode;
}

export function HeaderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <section className='w-full max-w-3xl xl:max-w-6xl h-full mx-auto mb-16'>
      {children}
    </section>
  )
} 

export default function SectionWrapper({ children, sectionHeading }: SectionWraperProps): JSX.Element {
  return (
    <section>
      <div className='max-w-3xl xl:max-w-6xl h-full mx-auto mb-16'>
        {sectionHeading && <h1 className="text-center text--primary w-full font-bold mb-8 tracking-wide">{sectionHeading}</h1>}
        {children}
      </div>
    </section>
	);
}

export function FooterWrapper({ children }: { children: React.ReactNode }) {
  return (
    <section className='w-full max-w-3xl xl:max-w-6xl h-full mx-auto'>
      {children}
    </section>
  )
}