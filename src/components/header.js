import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Marquee from "react-fast-marquee";

import "./fonts.css"
import "./header.css"

const Header = () => (
    <header>
        <div>
          <Marquee gradient={false}>
            <StaticImage
                src="../images/headerbau.png"
                alt="baustell.ch Logo"
                placeholder="blurred"
                layout="fixed"
                height={180}
            />
            <StaticImage
                src="../images/headerbau.png"
                alt="baustell.ch Logo"
                placeholder="blurred"
                layout="fixed"
                height={180}
            />
            <StaticImage
                src="../images/headerbau.png"
                alt="baustell.ch Logo"
                placeholder="blurred"
                layout="fixed"
                height={180}
            />
            <StaticImage
                src="../images/headerbau.png"
                alt="baustell.ch Logo"
                placeholder="blurred"
                layout="fixed"
                height={180}
            />
            </Marquee>
        </div>
    </header>
  );

export default Header