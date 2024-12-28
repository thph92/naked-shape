type Props = {
  src: string;
};

export const Video = ({ src }: Props) => {
  return <video src={src} style={{ width: '100%' }} autoPlay loop muted />;
};
