import React from "react"
import TemplateComp from "../TemplateComponent/TemplateComp"

export default function Food() {
  let Start = 31
  let End = 36
  let ArticleHeading = "Food"
  return <TemplateComp Start={Start} End={End} Heading={ArticleHeading} />
}
