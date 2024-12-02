export function getLanguageColor(language: string) {
  switch (language) {
    case "Python":
      return "#3572a5";
    case "JavaScript":
      return "#f1e05a";
    case "TypeScript":
      return "#3078c6";
    case "Java":
      return "#b07219";
    case "HTML":
      return "#e34c26";
    case "CSS":
      return "#563d7c";
    case "C":
      return "#545454";
    case "Dart":
      return "#00b4ab";
    case "Ruby":
      return "#701516";
    case "Swift":
      return "#f05237";
    default:
      return "#ffffff";
  }
}
