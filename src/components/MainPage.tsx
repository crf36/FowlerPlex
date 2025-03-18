import { Navigation } from "./Navigation";

function Header() {
  return <div>Header</div>;
}

export default function MainPage() {
  return (
    <main style={{ width: "100%" }}>
      <Header />
      <Navigation />
    </main>
  );
}
