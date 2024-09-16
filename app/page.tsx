import Link from "next/link";
import CategoriesList from "./src/infraestructure/components/layouts/categories/CategoriesList";
import Header from "./src/infraestructure/components/layouts/header/Header";
import ScrollContainer from "./src/infraestructure/components/layouts/ScrollContainer";

export default function Home() {
  return (
    <>
      <Header />
      <Link href={"/pages/admin"} className="fixed z-40 bg-stone-100 text-amber-950 p-2 rounded-r-lg bg-opacity-50 brightness-125 max-w-32 top-80 text-xs">
      Ir a panel de administrador
      </Link>
      <ScrollContainer>
        <CategoriesList />
      </ScrollContainer>
    </>
  );
}
