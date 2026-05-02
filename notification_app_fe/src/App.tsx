import { useEffect } from "react";
import { getTopNotificationsHeap } from "./utils/getTopNotificationsHeap";
import { mockNotifications } from "./data/mockNotifications";
import { logger } from "../../logging_middleware/logger";

function App() {
  useEffect(() => {
    const run = async () => {
      try {
        const data = mockNotifications;
        const top10 = getTopNotificationsHeap(data, 10);

        logger.info("Top Notifications fetched", top10);
      } catch (error) {
        logger.error("Error processing notifications", error);
      }
    };

    run();
  }, []);

  return <div>Stage 1 Running - Check Console</div>;
}

export default App;