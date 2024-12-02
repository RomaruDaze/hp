function LanguageBar({
  languages,
}: {
  languages: { name: string; percentage: number; color: string }[];
}) {
  const totalPercentage = languages.reduce(
    (total, lang) => total + lang.percentage,
    0
  );

  return (
    <div className="language-bar">
      <div className="language-bar-total" style={{ width: "100%" }}>
        {languages.map((lang) => (
          <div
            key={lang.name}
            className="language-bar-item"
            style={{
              width: `${(lang.percentage / totalPercentage) * 100}%`,
              backgroundColor: lang.color,
            }}
          />
        ))}
      </div>
      <div className="language-bar-labels">
        {languages.map((lang) => (
          <div key={lang.name} className="language-bar-label">
            <div
              className="color-circle"
              style={{ backgroundColor: lang.color }}
            />
            <span>
              {lang.name} - {lang.percentage.toFixed(1)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LanguageBar;
