import ERC20_ABI from "../contracts/ERC20.json";
// @ts-ignore
import type { ERC20 } from "../contracts/types";
import useContract from "./useContract";

export default function useTokenContract(tokenAddress: string) {
    return useContract<ERC20>(tokenAddress, ERC20_ABI);
}