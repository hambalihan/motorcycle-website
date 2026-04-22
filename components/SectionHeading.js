import MotionFade from './MotionFade';

export default function SectionHeading({ tag, title, copy, align = 'center' }) {
  const alignment = align === 'left' ? 'max-w-3xl text-left' : 'mx-auto max-w-4xl text-center';

  return (
    <MotionFade className={`mb-12 md:mb-16 ${alignment}`}>
      <span className="section-tag">{tag}</span>
      <h2 className="section-title mt-7">{title}</h2>
      <p className="section-copy mt-7 max-w-[48rem]">{copy}</p>
    </MotionFade>
  );
}
