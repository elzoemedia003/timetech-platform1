import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="app-main">
        <div className="page-container">{children}</div>
      </main>
    </div>
  );
}
