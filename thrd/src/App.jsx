import { useEffect, useState } from "react";
import { parseCSV } from "./utils/parseCSV";
import Login from "./components/Login/Login";
import ProductList from "./components/ProductList/ProductList";

const App = () => {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [purchaseHistory, setPurchaseHistory] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const usersData = await parseCSV("/users.csv");
      const productsData = await parseCSV("/products.csv");
      const purchaseHistoryData = await parseCSV("/purchase_history.csv");

      setUsers(usersData);
      setProducts(productsData);
      setPurchaseHistory(purchaseHistoryData);
    };

    loadData();
  }, []);


  useEffect(() => {
    if (loggedInUser) {
      const userHistory = purchaseHistory.filter(
        (p) => p.Username === loggedInUser.Username
      );
      const purchasedCategories = userHistory.map((p) => p.Category);
  
      const notPurchased = products.filter(
        (p) => !purchasedCategories.includes(p.Category)
      );
      const purchased = products.filter((p) =>
        purchasedCategories.includes(p.Category)
      );
  
      const safeSort = (a, b) => {
        const nameA = a.ProductName || ""; 
        const nameB = b.ProductName || ""; 
        return nameA.localeCompare(nameB);
      };
  
      setFilteredProducts([
        ...notPurchased.sort(safeSort),
        ...purchased.sort(safeSort),
      ]);
    }
  }, [loggedInUser, purchaseHistory, products]);
  

  return (
    <div className="app">
      {loggedInUser ? (
        <ProductList products={filteredProducts} />
      ) : (
        <Login users={users} onLogin={setLoggedInUser} />
      )}
    </div>
  );
};

export default App;
