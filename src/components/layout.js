import * as React from "react"

import {
    screenwrapper,
} from '../style/module.layout.css'

const Layout = ({ children }) => {
  return (
    <div>
        <div className={screenwrapper}>
            <h1>NEWSWORM</h1>
            <h2>info@newsworm.com</h2>
            <p>NewsWorm is a collection of antique Vogue magazines digitized for the new age. Purchase on request available</p>
            <ul>
                <li>Vogue#1</li>
                <li>Vogue#2</li>
                <li>Vogue#3</li>
                <li>Vogue#4</li>
                <li>Vogue#5</li>
                <li>Vogue#6</li>
            </ul>
        </div>
        <main>
            {children}
        </main>
        </div>

  )
}

export default Layout

