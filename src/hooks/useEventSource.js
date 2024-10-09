import { useEffect } from "react";

const useEventSource = (url, eventName, eventHandler) => {
  useEffect(() => {
    const eventSource = new EventSource(url);
    eventSource.addEventListener(eventName, eventHandler);
    return () => {
      eventSource.close();
    }
  }, [url, eventName, eventHandler]);
}

export default useEventSource;