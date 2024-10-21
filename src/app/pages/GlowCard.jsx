"use client";
import { useEffect } from "react";

// CSS-in-JS Styles
const cardStyles = {
  container: {
    display: "flex",
    flexDirection: "row",
    gap: "32px",
  },
  card: {
    position: "relative",
    background: "#101123",
    border: "1px solid #2a2e5a",
    transition: "all 0.3s ease-in-out",
    borderRadius: "15px",
    overflow: "hidden",
  },
  cardHover: {
    boxShadow: "0 0 20px rgba(255, 105, 180, 0.8), 0 0 30px rgba(135, 206, 250, 0.6), 0 0 40px rgba(135, 206, 250, 0.4)",
    borderColor: "transparent",
  },
};

const GlowCard = ({ children, identifier }) => {
  useEffect(() => {
    const CONTAINER = document.querySelector(`.glow-container-${identifier}`);
    const CARDS = document.querySelectorAll(`.glow-card-${identifier}`);

    const CONFIG = {
      proximity: 40,
      spread: 80,
      blur: 12,
      gap: 32,
      vertical: false,
      opacity: 0,
    };

    const UPDATE = (event) => {
      for (const CARD of CARDS) {
        const CARD_BOUNDS = CARD.getBoundingClientRect();

        if (
          event?.x > CARD_BOUNDS.left - CONFIG.proximity &&
          event?.x < CARD_BOUNDS.left + CARD_BOUNDS.width + CONFIG.proximity &&
          event?.y > CARD_BOUNDS.top - CONFIG.proximity &&
          event?.y < CARD_BOUNDS.top + CARD_BOUNDS.height + CONFIG.proximity
        ) {
          CARD.style.setProperty("--active", 1);
        } else {
          CARD.style.setProperty("--active", CONFIG.opacity);
        }

        const CARD_CENTER = [
          CARD_BOUNDS.left + CARD_BOUNDS.width * 0.5,
          CARD_BOUNDS.top + CARD_BOUNDS.height * 0.5,
        ];

        let ANGLE =
          (Math.atan2(event?.y - CARD_CENTER[1], event?.x - CARD_CENTER[0]) *
            180) /
          Math.PI;

        ANGLE = ANGLE < 0 ? ANGLE + 360 : ANGLE;

        CARD.style.setProperty("--start", ANGLE + 90);

        // Rotate glow direction
        CARD.style.setProperty("--rotation", `${ANGLE}deg`);
      }
    };

    document.body.addEventListener("pointermove", UPDATE);

    const RESTYLE = () => {
      if (CONTAINER) {
        CONTAINER.style.setProperty("--gap", CONFIG.gap);
        CONTAINER.style.setProperty("--blur", CONFIG.blur);
        CONTAINER.style.setProperty("--spread", CONFIG.spread);
        CONTAINER.style.setProperty(
          "--direction",
          CONFIG.vertical ? "column" : "row"
        );
      }
    };

    RESTYLE();
    UPDATE();

    // Cleanup event listener
    return () => {
      document.body.removeEventListener("pointermove", UPDATE);
    };
  }, [identifier]);

  return (
    <div className={`glow-container-${identifier} glow-container`} style={cardStyles.container}>
      <article
        className={`glow-card glow-card-${identifier} h-fit cursor-pointer border border-[#2a2e5a] transition-all duration-300 relative bg-[#101123] text-gray-200 rounded-xl hover:border-transparent w-full`}
        style={cardStyles.card}
        onMouseOver={(e) => e.currentTarget.style.boxShadow = cardStyles.cardHover.boxShadow}
        onMouseOut={(e) => e.currentTarget.style.boxShadow = ""}
      >
        <div className="glows"></div>
        {children}
      </article>
    </div>
  );
};

export default GlowCard;
