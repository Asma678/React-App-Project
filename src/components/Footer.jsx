import React, { useContext } from "react"
import { ContextTheme } from "./Context/ContextTheme"

export default function Footer() {
  const [darkMode] = useContext(ContextTheme)
  return (
    <footer className={`${darkMode ? `Dark2` : "Light"}`}>
      <hr />
      <h5>© Batch ea14 Asma</h5>
    </footer>
  )
}