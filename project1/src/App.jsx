import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import MainContent from "./MainContent.jsx";

function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
export default function App() {
  return <Page />;
}
