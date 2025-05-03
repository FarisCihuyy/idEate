import { useEffect, useState } from "react";

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const target = new Date(targetDate);

    if (isNaN(target.getTime())) {
      // Jika targetDate tidak valid
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const difference = target - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetDate]);

  const format = (val) => String(val).padStart(2, "0");

  return (
    <div className="w-full flex justify-center gap-2 text-[10px] font-light mx-auto text-white">
      <div>
        <span>{format(timeLeft.days)}</span>
        <span className="ml-1">day</span>
      </div>
      <div>
        <span>{format(timeLeft.hours)}</span>
        <span className="ml-1">hr</span>
      </div>
      <div>
        <span>{format(timeLeft.minutes)}</span>
        <span className="ml-1">min</span>
      </div>
      <div>
        <span>{format(timeLeft.seconds)}</span>
        <span className="ml-1">sec</span>
      </div>
    </div>
  );
};

export default Countdown;
