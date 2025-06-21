import { useContext } from "react";
import "./App.css";
import { WalletContext } from "./components/WalletContext";
import TokenActions from "./components/TokenActions";
import OwnerActions from "./components/OwnerActions";

function App() {
  const { account, connectWallet } = useContext(WalletContext);

  return (
    <div className="app-container">
      <h1>Boner Token Exchange</h1>
      {account ? (
        <>
          <div className="account-info">
            <span className="connected-dot" /> Connected: <b>{account}</b>
          </div>
          <div className="actions-grid">
            <TokenActions />
            <OwnerActions />
          </div>
        </>
      ) : (
        <button className="connect-btn" onClick={connectWallet}>
          Connect Wallet
        </button>
      )}
    </div>
  );
}

export default App;