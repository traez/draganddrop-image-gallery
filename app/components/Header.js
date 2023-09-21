/*
The essence of the Header component to the codebase in which it is found is to provide a consistent way to render the header of the application on all pages. This makes the application more user-friendly and easier to maintain.
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
