/*
the 
*/
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <h1>Drag and Drop Image Gallery</h1>
      <div className="dragdrop-container">
        <Image
          src="/images/dragdrop.png"
          alt=""
          fill
          sizes="(min-width: 400px) 100vw"
        />
      </div>
    </header>
  );
}
