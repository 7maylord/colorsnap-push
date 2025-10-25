// "use client";

// import { useAccount } from '@/hooks/usePushChainWallet';
// import { usePushChainClient } from '@/hooks/usePushChainClient';

// /**
//  * Universal Signer Information Component
//  * 
//  * Displays information about the connected wallet and universal signer status
//  * Useful for debugging and testing universal signer functionality
//  */
// export default function UniversalSignerInfo() {
//   const { 
//     address, 
//     isConnected, 
//     sourceChain, 
//     isSolanaAccount, 
//     isEVMAccount,
//     universalAccount 
//   } = useAccount();
  
//   const { 
//     client, 
//     isLoading, 
//     error 
//   } = usePushChainClient();

//   if (!isConnected) {
//     return (
//       <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
//         <h3 className="text-sm font-medium text-yellow-800 mb-2">Universal Signer Status</h3>
//         <p className="text-sm text-yellow-700">No wallet connected</p>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
//       <h3 className="text-sm font-medium text-blue-800 mb-3">Universal Signer Status</h3>
      
//       <div className="space-y-2 text-sm">
//         <div className="flex justify-between">
//           <span className="text-blue-700 font-medium">Address:</span>
//           <span className="text-blue-600 font-mono text-xs">{address}</span>
//         </div>
        
//         <div className="flex justify-between">
//           <span className="text-blue-700 font-medium">Source Chain:</span>
//           <span className="text-blue-600">{sourceChain}</span>
//         </div>
        
//         <div className="flex justify-between">
//           <span className="text-blue-700 font-medium">Account Type:</span>
//           <div className="flex gap-2">
//             {isSolanaAccount && (
//               <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
//                 Solana
//               </span>
//             )}
//             {isEVMAccount && (
//               <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
//                 EVM
//               </span>
//             )}
//           </div>
//         </div>
        
//         <div className="flex justify-between">
//           <span className="text-blue-700 font-medium">Universal Client:</span>
//           <span className={`px-2 py-1 rounded text-xs ${
//             client ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
//           }`}>
//             {client ? 'Connected' : 'Not Available'}
//           </span>
//         </div>
        
//         {isLoading && (
//           <div className="flex justify-between">
//             <span className="text-blue-700 font-medium">Status:</span>
//             <span className="text-blue-600">Loading...</span>
//           </div>
//         )}
        
//         {error && (
//           <div className="flex justify-between">
//             <span className="text-red-700 font-medium">Error:</span>
//             <span className="text-red-600 text-xs">{error}</span>
//           </div>
//         )}
        
//         {universalAccount && (
//           <details className="mt-2">
//             <summary className="text-blue-700 font-medium cursor-pointer">
//               Universal Account Details
//             </summary>
//             <pre className="mt-2 text-xs bg-gray-100 p-2 rounded overflow-auto">
//               {JSON.stringify(universalAccount, null, 2)}
//             </pre>
//           </details>
//         )}
//       </div>
//     </div>
//   );
// }
