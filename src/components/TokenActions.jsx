import { useContext, useState } from "react";
import { WalletContext } from "./WalletContext";
import { transferTokens, burnTokens, getSigner } from "../utils/ethereum";
import { ethers } from "ethers";

export default function TokenActions() {
  const { account } = useContext(WalletContext);
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTransfer = async () => {
    setLoading(true);
    try {
      const signer = await getSigner();
      await transferTokens(to, ethers.parseUnits(amount, 18), signer);
      alert("Transfer Successful");
      setTo("");
      setAmount("");
    } catch (e) {
      alert(e.message);
    }
    setLoading(false);
  };

  const handleBurn = async () => {
    setLoading(true);
    try {
      const signer = await getSigner();
      await burnTokens(ethers.parseUnits(amount, 18), signer);
      alert("Burn Successful");
      setAmount("");
    } catch (e) {
      alert(e.message);
    }
    setLoading(false);
  };

  return (
    <div className="card">
      <h2>Token Actions</h2>
      <input
        className="input"
        placeholder="Recipient"
        value={to}
        onChange={e => setTo(e.target.value)}
        disabled={loading}
      />
      <input
        className="input"
        placeholder="Amount"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        disabled={loading}
      />
      <div className="btn-group">
        <button className="action-btn" onClick={handleTransfer} disabled={loading}>
          {loading ? "Processing..." : "Transfer"}
        </button>
        <button className="action-btn" onClick={handleBurn} disabled={loading}>
          {loading ? "Processing..." : "Burn"}
        </button>
      </div>
    </div>
  );
}