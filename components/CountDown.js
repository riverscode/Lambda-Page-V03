import { useEffect, useState } from "react";

const CountDown = ({ date }) => {
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = date.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      {partyTime ? (
        <></>
      ) : (
        <>
          <div className="flex  text-center text-gray-100 divide-x">
            <div className="flex flex-col px-2">
              <p className="text-sm font-bold">{days}</p>
              <p className="text-xs">dias</p>
            </div>

            <div className="flex flex-col px-2">
              <p className="text-sm font-bold">{hours}</p>
              <p className="text-xs">horas</p>
            </div>
            <div className="flex flex-col px-2">
              <p className="text-sm font-bold">{minutes}</p>
              <p className="text-xs">Minutos</p>
            </div>
            <div className="flex flex-col px-2">
              <p className="text-sm font-bold">{seconds}</p>
              <p className="text-xs">Segundos</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CountDown;
