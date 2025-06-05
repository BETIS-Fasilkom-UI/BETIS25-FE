import Image from 'next/image';

export default function Buku(props: { className: string }) {
  return (
    <div className={`${props.className}`}>
      <Image src={'/s3/buku.png'} alt="buku" sizes="none" fill />
    </div>
  );
}
