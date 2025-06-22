import { Interface } from "ethers";

// Define known custom errors
const iface = new Interface([
  "error EnforcedPause()"
]);

export function parseEvmError(e) {
  // Try to extract the error data (works for ethers v6 and v5-compatible)
  const errorData = e?.data ?? e?.error?.data;

  if (e.code === "CALL_EXCEPTION" && errorData) {
    try {
      const decoded = iface.parseError(errorData);
      if (decoded?.name === "EnforcedPause") {
        return "🚫 Transfers are currently paused by the contract owner.";
      }
    } catch (decodeErr) {
      // Failed to decode – unknown error format
      console.warn("Failed to decode custom error", decodeErr);
    }
  }

  // Default fallback
  return e?.message || "❌ Transaction failed";
}
