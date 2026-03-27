import { PatternStudio } from "../components/pattern-studio";

export default function App() {
  return (
    <main className="h-dvh min-h-0 overflow-hidden bg-[var(--studio-app-bg)] text-white">
      <div className="flex h-full min-h-0 flex-col overflow-hidden bg-[var(--studio-shell)]">
        <PatternStudio />
      </div>
    </main>
  );
}
