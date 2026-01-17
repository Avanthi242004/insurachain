import MainLayout from "../components/layout/MainLayout";

export default function BlockchainLog() {
  const transactions = [
    "0xabc123...",
    "0xdef456...",
    "0xghi789..."
  ];

  return (
    <MainLayout>
      <h2 className="text-xl font-bold mb-4">Blockchain Transactions</h2>

      <ul className="bg-white p-4 rounded shadow space-y-2">
        {transactions.map((txn, i) => (
          <li key={i} className="text-gray-700">
            Txn Hash: {txn}
          </li>
        ))}
      </ul>
    </MainLayout>
  );
}
