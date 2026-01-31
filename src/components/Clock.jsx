import { useEffect, useState } from 'react';

function Clock() {
  const [now, setNow] = useState(
    () => new Date()
  );

  useEffect(() => {
    const timer = setInterval(
      () => setNow(new Date()),
      1000
    );
    return () => clearInterval(timer);
  }, []);
  const time = now.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: undefined,
  });
  return (
    <span
      className="pl-2 text-sm text-red-500 md:text-xl"
      style={{
        letterSpacing: '0.1em',
        textShadow:
          '0 0 3px #ff2222, 0 0 16px #911',
        userSelect: 'none',
      }}
    >
      {time}
    </span>
  );
}

export default Clock;
