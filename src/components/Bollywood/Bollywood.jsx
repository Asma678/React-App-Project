import React from "react"
import TemplateComp from "../TemplateComponent/TemplateComp"

export default function Bollywood() {
  let Start = 1
  let End = 5
  let ArticleHeading = "Bollywood"
  return <TemplateComp Start={Start} End={End} Heading={ArticleHeading} />
}

