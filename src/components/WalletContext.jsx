import { createContext, useState, useEffect } from "react";


export const WalletContext = createContext();

export function WalletProvider({ children}) {
    const [account, setAccount] = useState(null);

    const connectWallet = async () => {
        if(window.ethereum) {
            try {
                const accounts = await window.ethereum.request({ method: "eth_requestAccounts"});
                setAccount(accounts[0]);
            } catch (error) {
                console.error("Error connecting to wallet:", error);
            }
        } else {
            alert("Wallet not detected");
        }
    }

    useEffect(() => {
        if(window.ethereum) {
            window.ethereum.request({ method: "eth_accounts" }).then(accounts => {
                if(accounts.length > 0) setAccount(accounts[0]);
            })
        }
    }, []);

    return (
        <WalletContext.Provider value={{ account, connectWallet }}>
            {children}
        </WalletContext.Provider>
    )
};