
"use client"

import Branding from "./Header/Branding"
import Header from "./Header/Header"
import PromptLayout from "./PromptsSection/PromptLayout"
import TipsSection from "./Tips/TipSection"

function Page(){
return(
    <div className="ml-16">
      <Branding/>
        <PromptLayout/>
        <TipsSection/>
    </div>
)
}

export default Page