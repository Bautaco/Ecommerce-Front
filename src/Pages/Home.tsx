import { useState } from "react";
import PageTemplate from "../components/PageTemplate";
import PhotoGallery from "../components/Gallery/PhotoGallery";

export function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <PageTemplate>
      <img src="src\assets\desktop.webp" alt="woman-style" className="w-full" />
      <PhotoGallery />
    </PageTemplate>
  );
}
