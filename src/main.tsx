import { createRoot } from "react-dom/client";
import colors from "./assets/colors/index.tsx";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";

// Example usage of colors
const rootElement = document.getElementById("root")!;
rootElement.style.setProperty("--primary-color", colors().primary);
rootElement.style.setProperty("--secondary-color", colors().secondary);
rootElement.style.setProperty("--tertiary-color", colors().tertiary);

createRoot(rootElement).render(<App />);
