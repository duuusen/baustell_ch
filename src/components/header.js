import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
  const [key, setKey] = useState(1);

    const scrolling = useSpring({
      from: { transform: "translate(0%,0)" },
      to: { transform: "translate(-20%,0)" },
      config: { duration: 10000 },
      reset: true,
      //reverse: key % 2 == 0,
      onRest: () => {
        setKey(key + 1);
      }
    });

  return (
    <header>
        <div key={key}>
          <animated.div style={scrolling}>
            <StaticImage
                src="../images/baustell-banner-lang.jpg"
                alt="baustell.ch Logo"
                placeholder="blurred"
                layout="fixed"
                height={100}
            />
          </animated.div>
        </div>
    </header>
  );
};

export default Header