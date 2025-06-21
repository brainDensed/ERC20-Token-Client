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
    <div>
      <h3>Owner Actions</h3>
      <input
        placeholder="Recipient"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />
      <input
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleMint}>Mint</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleUnpause}>Unpause</button>
    </div>
  );
}
