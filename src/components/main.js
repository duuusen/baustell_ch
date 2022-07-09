import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import "./global.css"
import "./fonts.css"
import "./baugeruest.css"

const Main = () => {
  return (
      <div class="main-grid">
		<div id="vertical-eins" class="metal-vertical"></div>
		<div id="testy">
			<div style={{height: '150px'}}></div>
			<div class="metal-horizontal"></div>
			<div style={{height: '100px'}}></div>
			<div class="wood-horizontal-yellow">
				<div class="plate-left"></div>
				<div class="plate-right"></div>
			</div>
		</div>
		<div id="vertical-zwei" class="metal-vertical"></div>
		<div>
			<div style={{height: '15px'}}></div>
      <div class="baustell-logo">
      </div>
      <div style={{height: '15px'}}></div>
			<div class="metal-horizontal"></div>
			<div style={{height: '100px'}}></div>
			<div class="wood-horizontal-yellow">
				<div class="plate-left"></div>
				<div class="plate-right"></div>
			</div>
		</div>
		<div id="vertical-drei" class="metal-vertical"></div>
		<div>
			<div style={{height: '150px'}}></div>
			<div class="metal-horizontal"></div>
			<div style={{height: '100px'}}></div>
			<div class="wood-horizontal-yellow">
				<div class="plate-left"></div>
				<div class="plate-right"></div>
			</div>
			<div className="board">
				hallo
			</div>
		</div>
		<div id="vertical-vier" class="metal-vertical"></div>
		<div>
			<div style={{height: '150px'}}></div>
			<div class="metal-horizontal"></div>
			<div style={{height: '100px'}}></div>
			<div class="wood-horizontal-yellow">
				<div class="plate-left"></div>
				<div class="plate-right"></div>
			</div>
		</div>
		<div id="vertical-funf" class="metal-vertical"></div>
		<div>
			<div style={{height: '150px'}}></div>
			<div class="metal-horizontal"></div>
			<div style={{height: '100px'}}></div>
			<div class="wood-horizontal-yellow">
				<div class="plate-left"></div>
				<div class="plate-right"></div>
			</div>
		</div>
		<div id="vertical-sechs" class="metal-vertical"></div>
	</div>
  )
}

export default Main