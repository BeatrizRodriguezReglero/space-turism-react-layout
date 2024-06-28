import { v4 } from "uuid"
import { StyledContainerTab, StyledContainerTitle, StyledImage, StyledTab, StyledTitle } from "./tech-container.styles"
import { TECHNOLOGY } from "../../constants/technology"
import { useState } from "react"

const TechnologyContainer=()=>{
    const[techActive, setTechActive]=useState(0)
    return(
        <>
            <div>
                <StyledContainerTitle>
                    <StyledTitle $color='#464a50' $bold={true}>03</StyledTitle>
                    <StyledTitle $color='white'  >SPACE LAUNCH 101</StyledTitle>
                </StyledContainerTitle> 
                <StyledImage src={TECHNOLOGY[techActive].image} alt="" />
                <StyledContainerTab>
                    {
                      TECHNOLOGY.map((technology, index)=>(
                            <StyledTab key={v4()} $active={techActive===index}  onClick={()=>setTechActive(index)}>{technology.order}</StyledTab>
                        ))
                        

                    }
                </StyledContainerTab>
                <div>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
            </div>
        </>
    )
}
export default TechnologyContainer