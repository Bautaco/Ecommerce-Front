import { useState } from "react";
import PageTemplate from "../components/PageTemplate";
import Sidebar from "../components/Sidebar/Sidebar";
import PhotoGallery from "../components/Gallery/PhotoGallery";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <PageTemplate>
      <img src="src\assets\desktop.webp" alt="woman-style" className="w-full" />
      <PhotoGallery />
    </PageTemplate>
  );
}
