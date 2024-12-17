import PhotoGallery from "../components/Gallery/PhotoGallery";

export function Home() {
  return (
    <>
      <img
        src="src\assets\desktop.webp"
        alt="woman-style"
        loading="lazy"
        className="w-full"
      />
      <PhotoGallery />
    </>
  );
}
