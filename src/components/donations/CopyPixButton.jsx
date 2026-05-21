import { Copy } from "lucide-react";
import { useState } from "react";

export function CopyPixButton({ pixKey }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(pixKey);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800"
    >
      <Copy size={18} /> {copied ? "Pix copiado" : "Copiar Pix"}
    </button>
  );
}
