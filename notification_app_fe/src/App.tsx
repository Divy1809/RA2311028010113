import { useEffect } from "react";
import { fetchNotifications } from "./services/api";
import { getTopNotifications } from "./utils/getTopNotifications";
import { mockNotifications } from "./data/mockNotifications";


function App() {
  useEffect(() => {
    const run = async () => {
      const data = mockNotifications;
      const top10 = getTopNotifications(data, 10);

      console.log("Top Notifications:", top10);
    };

    run();
  }, []);

  return <div>Stage 1 Running - Check Console</div>;
}

export default App;