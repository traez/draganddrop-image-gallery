/*
The essence of the Footer component to the codebase in which it is found is to provide a consistent way to render the footer of the application on all pages. This makes the application more user-friendly and easier to maintain.
*/
export default function Footer() {
  return (
    <footer>
      <small>
        <i>©2023 Trae Zeeofor </i>
        <a
          href="https://github.com/traez/draganddrop-image-gallery"
          target="_blank"
          className=""
        >
          Source Code
        </a>
      </small>
    </footer>
  );
}
