
"use client"

import Branding from "./_Header/Branding"
import Header from "./_Header/Header"
import PromptLayout from "./_PromptsSection/PromptLayout"
import TipsSection from "./_Tips/TipSection"

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