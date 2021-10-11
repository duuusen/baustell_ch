import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Marquee from "react-fast-marquee";

import "./fonts.css"

const Header = () => (
    <header>
        <div>
          <Marquee gradient={false}>
            <StaticImage
                src="../images/headerbau.png"
                alt="baustell.ch Logo"
                placeholder="blurred"
                layout="fixed"
                height={200}
            />
            <StaticImage
                src="../images/headerbau.png"
                alt="baustell.ch Logo"
                placeholder="blurred"
                layout="fixed"
                height={200}
            />
            <StaticImage
                src="../images/headerbau.png"
                alt="baustell.ch Logo"
                placeholder="blurred"
                layout="fixed"
                height={200}
            />
            <StaticImage
                src="../images/headerbau.png"
                alt="baustell.ch Logo"
                placeholder="blurred"
                layout="fixed"
                height={200}
            />
            </Marquee>
        </div>
    </header>
  );

export default Header