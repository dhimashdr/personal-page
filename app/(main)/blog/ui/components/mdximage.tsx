import Image from 'next/image';

interface MDXImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const MDXImage = ({ src, alt, width, height } : MDXImageProps) => {
  return (
    <span className="flex justify-center my-8">
      <Image 
        src={src} 
        alt={alt} 
        width={width || 200} 
        height={height || 200} 
      />
    </span>
  );
};

export default MDXImage;