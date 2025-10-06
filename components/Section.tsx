import { PropsWithChildren } from 'react';

type SectionProps = PropsWithChildren<{
  id?: string;
  title?: string;
  subtitle?: string;
}>;

export default function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="section relative">
      <div className="container-prose">
        {title && (
          <div className="mb-8 px-8">
            <h2 className="section-title">{title}</h2>
            {subtitle && <p className="section-subtitle mt-2">{subtitle}</p>}
          </div>
        )}
        <div className="animate-fadeInUp">{children}</div>
      </div>
    </section>
  );
}


