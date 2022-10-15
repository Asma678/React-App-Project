import React from "react"
import TemplateComp from "../TemplateComponent/TemplateComp"

export default function Hollywood() {
  let Start = 6
  let End = 11
  let ArticleHeading = "Hollywood"
  return <TemplateComp Start={Start} End={End} Heading={ArticleHeading} />
}

