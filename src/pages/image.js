import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* <img src="https://plus.unsplash.com/premium_photo-1718198501646-a95f049e39b5" /> */}
      <Image
        width={500}
        height={500}
        src="https://plus.unsplash.com/premium_photo-1718198501646-a95f049e39b5"
        alt="premium_photo-1718198501646-a95f049e39b5"
      />
    </main>
  );
}
