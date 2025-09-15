import React, { useState, useEffect } from "react";
import { getTelegramEnv } from "../utils/telegram";

const Products = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const tg = getTelegramEnv();

  useEffect(() => {
    tg.ready();
    tg.expand();
  }, [tg]);

  const handleSelect = (product) => {
    setSelectedProduct(product);
    if (tg.HapticFeedback) {
      tg.HapticFeedback.impactOccurred("light");
    }
  };

  const handleClose = () => {
    setSelectedProduct(null);
  };

  const renderPrice = (product) => {
    if (!product) return "";
    if (product.discount) {
      return ${product.price - product.discount} ₽ (скидка ${product.discount} ₽);
    }
    return ${product.price} ₽;
  };

  return (
    <div className="products-container">
      {selectedProduct ? (
        <div className="product-view">
          <h2>{selectedProduct.title}</h2>
          <img
            src={selectedProduct.thumbnail || ""}
            alt={selectedProduct.title || "product"}
            style={{ maxWidth: "200px" }}
          />
          <p>{selectedProduct.description || ""}</p>
          <p>Цена: {renderPrice(selectedProduct)}</p>
          <button onClick={handleClose}>Назад</button>
        </div>
      ) : (
        <div className="product-list">
          {products && products.length > 0 ? (
            products.map((p) => (
              <div
                key={p.id}
                className="product-card"
                onClick={() => handleSelect(p)}
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  margin: "10px",
                  cursor: "pointer",
                }}
              >
                <img
                  src={p.thumbnail || ""}
                  alt={p.title || "product"}
                  style={{ maxWidth: "150px" }}
                />
                <h3>{p.title}</h3>
                <p>{renderPrice(p)}</p>
              </div>
            ))
          ) : (
            <p>Нет продуктов</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Products;х
