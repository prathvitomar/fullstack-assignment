import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import ShoppingPage from "./components/";
import { parseCSV } from "./utils/parseCSV";

const App = () => {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [purchaseHistory, setPurchaseHistory] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const loadCSVData = async () => {
      const usersData = await parseCSV("/data/users.csv");
      const productsData = await parseCSV("/data/products.csv");
      const purchaseHistoryData = await parseCSV("/data/purchase_history.csv");
      setUsers(usersData);
      setProducts(productsData);
      setPurchaseHistory(purchaseHistoryData);
    };

    loadCSVData();
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Login users={users} setCurrentUser={setCurrentUser} />}
        />
        <Route
          path="/shopping"
          element={
            <ShoppingPage
              currentUser={currentUser}
              products={products}
              purchaseHistory={purchaseHistory}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
