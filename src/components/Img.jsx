import sizes from '../imgsizes.json';

export default function Img({ name, alt, className = '', sizesAttr = '100vw', priority = false, ...rest }) {
  const list = sizes[name];
  const largest = list[list.length - 1];
  const srcSet = list.map(([w]) => `/img/${name}-${w}.webp ${w}w`).join(', ');
  const fallback = list.find(([w]) => w >= 960) || largest;
  return (
    <img
      src={`/img/${name}-${fallback[0]}.webp`}
      srcSet={srcSet}
      sizes={sizesAttr}
      width={largest[0]}
      height={largest[1]}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchpriority={priority ? 'high' : undefined}
      className={className}
      {...rest}
    />
  );
}
