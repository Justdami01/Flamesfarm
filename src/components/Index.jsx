import React from "react"
import Navigation from "./Navigation"
import Homepage from "./Homepage"
import Portfolio from "./Portfolio"
import Line from "./Line"
import WorkProcess from "./WorkProcess"
import Search from "./Search"
import CTA from "./CTA"
import Blog from "./Blog"
import WhatIdo from "./WhatIdo"
import HappyClient from "./HappyClient"
import Testimonial from "./Testimonial"
import Macbook from "./Macbook"
import Listening from "./Listening"

function Index() {
  return (
    <div>
    <Navigation />
    <Homepage />
    <Search />
    <Line />
    <WorkProcess />
    <Blog />
    <Portfolio />
    <WhatIdo />
    <Testimonial />
    <Listening />
    <Macbook />
    <CTA />
    <HappyClient />
    </div>
  )
}

export default Index