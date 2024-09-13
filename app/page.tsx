import CategoriesList from "./src/infraestructure/components/layouts/categories/CategoriesList";
import Header from "./src/infraestructure/components/layouts/header/Header";
import ScrollContainer from "./src/infraestructure/components/layouts/ScrollContainer";


export default function Home() {
  return (
    <>
 <Header/>
 <ScrollContainer>
  <CategoriesList/>
 </ScrollContainer>
    </>
  );
}
