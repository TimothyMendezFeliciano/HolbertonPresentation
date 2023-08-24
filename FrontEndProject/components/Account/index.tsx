import {useWeb3React} from "@web3-react/core";
import useMetaMaskOnboarding from "../../hooks/useMetaMaskOnboarding";
import {useEffect, useState} from "react";
import {injected} from "../../connectors";
import {UserRejectedRequestError} from "@web3-react/injected-connector";
import {shortenHex} from "../../utils/utils";

type AccountProps = {
    triedToEagerConnect: boolean
}

const Account = ({triedToEagerConnect}: AccountProps) => {
    const {active, error, activate, chainId, account, setError, deactivate} =
        useWeb3React();

    const {
        isMetaMaskInstalled,
        isWeb3Available,
        startOnboarding,
        stopOnboarding,
    } = useMetaMaskOnboarding();

    const [connecting, setConnecting] = useState(false);
    useEffect(() => {
        if (active || error) {
            setConnecting(false);
            stopOnboarding();
        }
    }, [active, error, stopOnboarding]);

    if (error) {
        return null;
    }

    if (!triedToEagerConnect) {
        return null;
    }

    if (typeof account !== "string") {
        return (
            <div>
                {isWeb3Available ? (
                    <button
                        disabled={connecting}
                        className='btn-primary'
                        onClick={() => {
                            setConnecting(true)
                            activate(injected, undefined, true).catch((error) => {
                                if (error instanceof UserRejectedRequestError) {
                                    setConnecting(false)
                                } else {
                                    setError(error)
                                }
                            })
                        }}
                    >{isMetaMaskInstalled && "Connect to MetaMask"}</button>
                ) : (
                    <button
                        onClick={startOnboarding}
                        className="btn-primary"
                    >Install Metamask</button>
                )}
            </div>
        )
    }

    return (
        <button className={'btn-primary'} onClick={deactivate}>
            {shortenHex(account)}
        </button>
    )

}

export default Account