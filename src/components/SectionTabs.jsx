const SectionTabs = ({ current, setTab }) => {
  const tabs = [
    { key: "default", label: "🎨 Default Colors" },
    { key: "name", label: "🌈 Color Name" },
    { key: "hex", label: "🧪 Hash Color" },
  ];

  return (
    <div className="flex justify-center gap-3 text-sm font-medium">
      {tabs.map((t) => (
        <button
          key={t.key}
          onClick={() => setTab(t.key)}
          className={`px-4 py-2 rounded-full transition-all cursor-pointer ${
            current === t.key
              ? "bg-white/30 text-white"
              : "bg-white/10 text-white/60 hover:bg-white/20"
          }`}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
};

export default SectionTabs;
