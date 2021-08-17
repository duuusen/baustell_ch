import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Marquee from "react-fast-marquee";

const Header = () => (
    <header>
        <div>
          <Marquee gradient={false}>
            <StaticImage
                src="../images/baustell-banner-lang.jpg"
                alt="baustell.ch Logo"
                placeholder="blurred"
                layout="fixed"
                height={100}
            />
            <StaticImage
                src="../images/baustell-banner-lang.jpg"
                alt="baustell.ch Logo"
                placeholder="blurred"
                layout="fixed"
                height={100}
            />
            <StaticImage
                src="../images/baustell-banner-lang.jpg"
                alt="baustell.ch Logo"
                placeholder="blurred"
                layout="fixed"
                height={100}
            />
            <StaticImage
                src="../images/baustell-banner-lang.jpg"
                alt="baustell.ch Logo"
                placeholder="blurred"
                layout="fixed"
                height={100}
            />
            </Marquee>
          {/* </animated.div> */}
        </div>
    </header>
  );

export default Header