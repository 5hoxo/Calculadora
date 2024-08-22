
export default function TelaCalculadora({ valorTela }: { valorTela: string }) {
  return (
    <div className="bg-gray-500 pt-6 rounded-lg">
      <p className="text-right text-3xl">
        <span className="font-black">{valorTela}</span>
      </p>
    </div>
  );
}