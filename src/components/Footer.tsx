export default function Footer() {
  return (
    <footer className="mt-auto border-t border-panel/50 px-6 py-8 text-center text-sm text-slate/50">
      <p>
        Am I Pregnant is an educational tool and does not provide medical advice. Always
        confirm with a healthcare provider.
      </p>
      <p className="mt-2">&copy; {new Date().getFullYear()} Am I Pregnant. Open source.</p>
    </footer>
  );
}
