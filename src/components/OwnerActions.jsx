import { useState } from "react";
import {
  getSigner,
  mintTokens,
  pauseContract,
  unpauseContract,
} from "../utils/ethereum";

export default function OwnerActions() {
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");

  const handleMint = async () => {
    try {
      const signer = await getSigner();
      await mintTokens(to, ethers.parseUnits(amount, 18), signer);
      alert("Mint successful");
    } catch (error) {
      alert(error.message);
    }
  };

  const handlePause = async () => {
    try {
      const signer = await getSigner();
      await pauseContract(signer);
      alert("Paused");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleUnpause = async () => {
    try {
      const signer = await getSigner();
      await unpauseContract(signer);
      alert("Unpaused");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="card">
      <h2>Owner Actions</h2>
      <input
        className="input"
        id="to"
        placeholder="Recipient"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />
      <input
        className="input"
        id="amount"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <div className="btn-group">
        <button className="action-btn" onClick={handleMint}>
          Mint
        </button>
      </div>
      <div className="btn-group">
        <button className="action-btn" onClick={handlePause}>
          Pause
        </button>
        <button className="action-btn" onClick={handleUnpause}>
          Unpause
        </button>
      </div>
    </div>
  );
}
