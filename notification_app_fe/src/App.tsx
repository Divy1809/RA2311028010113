import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllNotifications from "./pages/AllNotifications";
import PriorityInbox from "./pages/PriorityInbox";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllNotifications />} />
        <Route path="/priority" element={<PriorityInbox />} />
      </Routes>
    </Router>
  );
}

export default App;