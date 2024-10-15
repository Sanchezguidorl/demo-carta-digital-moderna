import Link from "next/link";
import Header from "../../layouts/header/Header";
import ScrollContainer from "../../layouts/ScrollContainer";
import CategoriesList from "../../layouts/categories/CategoriesList";


export default function LocalPage() {
  return (
    <div className="fade-in h-full">
      <Header />
      <Link href={"/pages/admin"} className="fixed z-40 bg-stone-100 text-amber-950 p-2 pl-4 rounded-r-lg bg-opacity-70 brightness-125 max-w-32 top-80 text-xs border border-gray-700">
      Ir a panel de administrador
      </Link>
      <ScrollContainer>
        <CategoriesList />
      </ScrollContainer>
    </div>
  );
}
