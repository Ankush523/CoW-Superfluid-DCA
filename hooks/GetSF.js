import { Framework } from "@superfluid-finance/sdk-core";
import { ethers } from "ethers";

const GetSF=async()=>{

    const provider = new ethers.providers.JsonRpcProvider("https://eth-goerli.g.alchemy.com/v2/07T0MAz99O4MioVQtvUKCz-8AQAUof1J");
    const network = await provider.getNetwork();

    const sf = await Framework.create({
        chainId: network.chainId,
        provider,
    });

    return sf;
}

export default GetSF;