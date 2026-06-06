import { useEffect, useMemo, useState } from "react";

const getRemaining = (targetDate) => {
  const total = Math.max(new Date(targetDate).getTime() - Date.now(), 0);
  const days = Math.floor(total / 86400000);
  const hours = Math.floor((total / 3600000) % 24);
  const minutes = Math.floor((total / 60000) % 60);
  const seconds = Math.floor((total / 1000) % 60);
  return { days, hours, minutes, seconds };
};

export function useCountdown(targetDate) {
  const initial = useMemo(() => getRemaining(targetDate), [targetDate]);
  const [time, setTime] = useState(initial);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTime(getRemaining(targetDate));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [targetDate]);

  return time;
}
