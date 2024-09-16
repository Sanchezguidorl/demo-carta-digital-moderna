
import BackIcon from "/public/images/backIcon.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function BackButton() {
  const router = useRouter();
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    // Verificamos si hay un historial de navegación
    setCanGoBack(window.history.length > 1);
  }, []);

  const handleBack = () => {
    if (canGoBack) {
      router.back();
    } else {
      // Si no hay historial de navegación o estamos en la ruta "/pages/admin", redirigimos a la home
      router.push("/");
    }
  };

  return (
    <div
      onClick={handleBack}
      className="p-2 pl-4 absolute left-0 top-6 w-14 bg-black rounded-r-lg bg-opacity-[35%] hover:cursor-pointer hover:saturate-150 hover:contrast-150"
    >
      <Image src={BackIcon} alt="Back Icon" />
    </div>
  );
}

export default BackButton;
