import { useRef } from "react";
import styles from "./TiltCard.module.css";

type Props = {
  title: string;
  desc: string;
};

const TiltCard = ({ title, desc }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y / rect.height - 0.5) * 10;
    const rotateY = (x / rect.width - 0.5) * 10;

    ref.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const reset = () => {
    if (ref.current) {
      ref.current.style.transform = "rotateX(0) rotateY(0)";
    }
  };

  return (
    <div
      ref={ref}
      className={styles.card}
      onMouseMove={handleMove}
      onMouseLeave={reset}
    >
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default TiltCard;