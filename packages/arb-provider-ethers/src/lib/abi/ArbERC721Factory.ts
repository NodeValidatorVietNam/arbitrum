/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from 'ethers';
import { Provider } from 'ethers/providers';
import { UnsignedTransaction } from 'ethers/utils/transaction';

import { ArbERC721 } from './ArbERC721';

export class ArbERC721Factory extends ContractFactory {
    constructor(signer?: Signer) {
        super(_abi, _bytecode, signer);
    }

    deploy(): Promise<ArbERC721> {
        return super.deploy() as Promise<ArbERC721>;
    }
    getDeployTransaction(): UnsignedTransaction {
        return super.getDeployTransaction();
    }
    attach(address: string): ArbERC721 {
        return super.attach(address) as ArbERC721;
    }
    connect(signer: Signer): ArbERC721Factory {
        return super.connect(signer) as ArbERC721Factory;
    }
    static connect(address: string, signerOrProvider: Signer | Provider): ArbERC721 {
        return new Contract(address, _abi, signerOrProvider) as ArbERC721;
    }
}

const _abi = [
    {
        constant: true,
        inputs: [
            {
                name: 'interfaceId',
                type: 'bytes4',
            },
        ],
        name: 'supportsInterface',
        outputs: [
            {
                name: '',
                type: 'bool',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            {
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'getApproved',
        outputs: [
            {
                name: '',
                type: 'address',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                name: 'to',
                type: 'address',
            },
            {
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'approve',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'totalSupply',
        outputs: [
            {
                name: '',
                type: 'uint256',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                name: 'from',
                type: 'address',
            },
            {
                name: 'to',
                type: 'address',
            },
            {
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'transferFrom',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            {
                name: 'owner',
                type: 'address',
            },
            {
                name: 'index',
                type: 'uint256',
            },
        ],
        name: 'tokenOfOwnerByIndex',
        outputs: [
            {
                name: '',
                type: 'uint256',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                name: 'from',
                type: 'address',
            },
            {
                name: 'to',
                type: 'address',
            },
            {
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'safeTransferFrom',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            {
                name: 'index',
                type: 'uint256',
            },
        ],
        name: 'tokenByIndex',
        outputs: [
            {
                name: '',
                type: 'uint256',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            {
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'ownerOf',
        outputs: [
            {
                name: '',
                type: 'address',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            {
                name: 'owner',
                type: 'address',
            },
        ],
        name: 'balanceOf',
        outputs: [
            {
                name: '',
                type: 'uint256',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                name: 'to',
                type: 'address',
            },
            {
                name: 'approved',
                type: 'bool',
            },
        ],
        name: 'setApprovalForAll',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                name: 'from',
                type: 'address',
            },
            {
                name: 'to',
                type: 'address',
            },
            {
                name: 'tokenId',
                type: 'uint256',
            },
            {
                name: '_data',
                type: 'bytes',
            },
        ],
        name: 'safeTransferFrom',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            {
                name: 'owner',
                type: 'address',
            },
            {
                name: 'operator',
                type: 'address',
            },
        ],
        name: 'isApprovedForAll',
        outputs: [
            {
                name: '',
                type: 'bool',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'from',
                type: 'address',
            },
            {
                indexed: true,
                name: 'to',
                type: 'address',
            },
            {
                indexed: true,
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'Transfer',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'owner',
                type: 'address',
            },
            {
                indexed: true,
                name: 'approved',
                type: 'address',
            },
            {
                indexed: true,
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'Approval',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'owner',
                type: 'address',
            },
            {
                indexed: true,
                name: 'operator',
                type: 'address',
            },
            {
                indexed: false,
                name: 'approved',
                type: 'bool',
            },
        ],
        name: 'ApprovalForAll',
        type: 'event',
    },
    {
        constant: true,
        inputs: [
            {
                name: 'owner',
                type: 'address',
            },
        ],
        name: 'tokensOfOwner',
        outputs: [
            {
                name: '',
                type: 'uint256[]',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                name: 'account',
                type: 'address',
            },
            {
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'adminMint',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                name: 'account',
                type: 'address',
            },
            {
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'withdraw',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
];

const _bytecode =
    '0x60806040526200001c6301ffc9a760e01b6200005260201b60201c565b620000346380ac58cd60e01b6200005260201b60201c565b6200004c63780e9d6360e01b6200005260201b60201c565b6200015b565b63ffffffff60e01b817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161415620000ef576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433136353a20696e76616c696420696e746572666163652069640000000081525060200191505060405180910390fd5b6001600080837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b612672806200016b6000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c80636352211e11610097578063b88d4fde11610066578063b88d4fde14610573578063e58306f914610678578063e985e9c5146106c6578063f3fef3a31461074257610100565b80636352211e146103c457806370a08231146104325780638462151c1461048a578063a22cb4651461052357610100565b806323b872dd116100d357806323b872dd146102445780632f745c59146102b257806342842e0e146103145780634f6ccce71461038257610100565b806301ffc9a714610105578063081812fc1461016a578063095ea7b3146101d857806318160ddd14610226575b600080fd5b6101506004803603602081101561011b57600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610790565b604051808215151515815260200191505060405180910390f35b6101966004803603602081101561018057600080fd5b81019080803590602001909291905050506107f7565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610224600480360360408110156101ee57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610892565b005b61022e610a79565b6040518082815260200191505060405180910390f35b6102b06004803603606081101561025a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610a86565b005b6102fe600480360360408110156102c857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610afc565b6040518082815260200191505060405180910390f35b6103806004803603606081101561032a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610bbb565b005b6103ae6004803603602081101561039857600080fd5b8101908080359060200190929190505050610bdb565b6040518082815260200191505060405180910390f35b6103f0600480360360208110156103da57600080fd5b8101908080359060200190929190505050610c5b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6104746004803603602081101561044857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610d23565b6040518082815260200191505060405180910390f35b6104cc600480360360208110156104a057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610df8565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561050f5780820151818401526020810190506104f4565b505050509050019250505060405180910390f35b6105716004803603604081101561053957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050610e59565b005b6106766004803603608081101561058957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156105f057600080fd5b82018360208201111561060257600080fd5b8035906020019184600183028401116401000000008311171561062457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611011565b005b6106c46004803603604081101561068e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611089565b005b610728600480360360408110156106dc57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506110d0565b604051808215151515815260200191505060405180910390f35b61078e6004803603604081101561075857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611164565b005b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b600061080282611212565b610857576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180612546602c913960400191505060405180910390fd5b6002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061089d82610c5b565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610924576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602181526020018061259b6021913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610943611284565b73ffffffffffffffffffffffffffffffffffffffff16148061097257506109718161096c611284565b6110d0565b5b6109c7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260388152602001806124bb6038913960400191505060405180910390fd5b826002600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a4505050565b6000600780549050905090565b610a97610a91611284565b8261128c565b610aec576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260318152602001806125bc6031913960400191505060405180910390fd5b610af7838383611380565b505050565b6000610b0783610d23565b8210610b5e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b81526020018061240e602b913960400191505060405180910390fd5b600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208281548110610ba857fe5b9060005260206000200154905092915050565b610bd683838360405180602001604052806000815250611011565b505050565b6000610be5610a79565b8210610c3c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806125ed602c913960400191505060405180910390fd5b60078281548110610c4957fe5b90600052602060002001549050919050565b6000806001600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610d1a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602981526020018061251d6029913960400191505060405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610daa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a8152602001806124f3602a913960400191505060405180910390fd5b610df1600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206113a4565b9050919050565b6060610e03826113b2565b805480602002602001604051908101604052809291908181526020018280548015610e4d57602002820191906000526020600020905b815481526020019060010190808311610e39575b50505050509050919050565b610e61611284565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610f02576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f4552433732313a20617070726f766520746f2063616c6c65720000000000000081525060200191505060405180910390fd5b8060046000610f0f611284565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16610fbc611284565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b61102261101c611284565b8361128c565b611077576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260318152602001806125bc6031913960400191505060405180910390fd5b611083848484846113fa565b50505050565b600173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146110c257600080fd5b6110cc828261146c565b5050565b6000600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b61116e338261148d565b606473ffffffffffffffffffffffffffffffffffffffff1663f3e414f883836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b1580156111f657600080fd5b505af115801561120a573d6000803e3d6000fd5b505050505050565b6000806001600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415915050919050565b600033905090565b600061129782611212565b6112ec576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c81526020018061248f602c913960400191505060405180910390fd5b60006112f783610c5b565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061136657508373ffffffffffffffffffffffffffffffffffffffff1661134e846107f7565b73ffffffffffffffffffffffffffffffffffffffff16145b80611377575061137681856110d0565b5b91505092915050565b61138b8383836114c7565b6113958382611722565b61139f82826118c0565b505050565b600081600001549050919050565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050919050565b611405848484611380565b61141184848484611987565b611466576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260328152602001806124396032913960400191505060405180910390fd5b50505050565b6114768282611cc3565b61148082826118c0565b61148981611edb565b5050565b6114978282611f27565b6114a18282611722565b600060066000838152602001908152602001600020819055506114c3816120b6565b5050565b8273ffffffffffffffffffffffffffffffffffffffff166114e782610c5b565b73ffffffffffffffffffffffffffffffffffffffff1614611553576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806125726029913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156115d9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602481526020018061246b6024913960400191505060405180910390fd5b6115e281612170565b611629600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061222e565b611670600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020612251565b816001600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b600061177a6001600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054905061226790919063ffffffff16565b9050600060066000848152602001908152602001600020549050818114611867576000600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002083815481106117e757fe5b9060005260206000200154905080600560008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020838154811061183f57fe5b9060005260206000200181905550816006600083815260200190815260200160002081905550505b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054809190600190036118b991906123bc565b5050505050565b600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490506006600083815260200190815260200160002081905550600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190806001815401808255809150509060018203906000526020600020016000909192909190915055505050565b60006119a88473ffffffffffffffffffffffffffffffffffffffff166122b1565b6119b55760019050611cbb565b600060608573ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1663150b7a02905060e01b6119f9611284565b898888604051602401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611aa9578082015181840152602081019050611a8e565b50505050905090810190601f168015611ad65780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b60208310611b6e5780518252602082019150602081019050602083039250611b4b565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611bd0576040519150601f19603f3d011682016040523d82523d6000602084013e611bd5565b606091505b509150915081611c4357600081511115611bf25780518082602001fd5b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260328152602001806124396032913960400191505060405180910390fd5b6000818060200190516020811015611c5a57600080fd5b8101908080519060200190929190505050905063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161493505050505b949350505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611d66576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4552433732313a206d696e7420746f20746865207a65726f206164647265737381525060200191505060405180910390fd5b611d6f81611212565b15611de2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000081525060200191505060405180910390fd5b816001600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611e7b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020612251565b808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b6007805490506008600083815260200190815260200160002081905550600781908060018154018082558091505090600182039060005260206000200160009091929091909150555050565b8173ffffffffffffffffffffffffffffffffffffffff16611f4782610c5b565b73ffffffffffffffffffffffffffffffffffffffff1614611fb3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806126196025913960400191505060405180910390fd5b611fbc81612170565b612003600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061222e565b60006001600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b60006120d1600160078054905061226790919063ffffffff16565b90506000600860008481526020019081526020016000205490506000600783815481106120fa57fe5b90600052602060002001549050806007838154811061211557fe5b9060005260206000200181905550816008600083815260200190815260200160002081905550600780548091906001900361215091906123bc565b506000600860008681526020019081526020016000208190555050505050565b600073ffffffffffffffffffffffffffffffffffffffff166002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461222b5760006002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b50565b6122466001826000015461226790919063ffffffff16565b816000018190555050565b6001816000016000828254019250508190555050565b60006122a983836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506122fc565b905092915050565b60008060007fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47060001b9050833f91508082141580156122f357506000801b8214155b92505050919050565b60008383111582906123a9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561236e578082015181840152602081019050612353565b50505050905090810190601f16801561239b5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b8154818355818111156123e3578183600052602060002091820191016123e291906123e8565b5b505050565b61240a91905b808211156124065760008160009055506001016123ee565b5090565b9056fe455243373231456e756d657261626c653a206f776e657220696e646578206f7574206f6620626f756e64734552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724552433732313a207472616e7366657220746f20746865207a65726f20616464726573734552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564455243373231456e756d657261626c653a20676c6f62616c20696e646578206f7574206f6620626f756e64734552433732313a206275726e206f6620746f6b656e2074686174206973206e6f74206f776ea265627a7a72305820a4da061c0fbc7ef2a324f55ab7a7d6de7e774ae599e47c82ad5c3142ca5c0bbf64736f6c634300050a0032';
