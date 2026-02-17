import ProductsGrid from "../components/ProductsGrid";
import "../styles/Page.css";
<p className="breadcrumb">Home / Women / Kurtis</p>
export default function Kurtis() {
  return (
    <div className="page-container">

      {/* Page Heading */}
      <h1 className="page-title">Women's Kurtis</h1>

      {/* Products Grid */}
      <ProductsGrid category="Kurti" />

    </div>
  );
}
