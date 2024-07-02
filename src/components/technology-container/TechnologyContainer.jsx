import { v4 } from "uuid"
import { StyledContainerImage, StyledContainerInfo, StyledContainerTab, StyledContainerTerm, StyledContainerTitle, StyledImage, StyledInfoTerm, StyledTab, StyledTerm, StyledTitle, StyledTitleTerm } from "./technologyContainer.styles"
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
            <StyledContainerInfo>

                
                <StyledContainerTerm>
                    <StyledContainerTab>
                    {
                      TECHNOLOGY.map((technology, index)=>(
                            <StyledTab key={v4()} $active={techActive===index}  onClick={()=>setTechActive(index)}>{technology.order}</StyledTab>
                        ))
                        

                    }
                    </StyledContainerTab>
                
                    <div>
                        <StyledTerm>THE TERMINOLOGY...</StyledTerm>
                        <StyledTitleTerm>{TECHNOLOGY[techActive].name}</StyledTitleTerm>
                        <StyledInfoTerm>{TECHNOLOGY[techActive].info}</StyledInfoTerm>

                    </div>
                    
                </StyledContainerTerm>
                
                <StyledContainerImage>
                   <StyledImage src={TECHNOLOGY[techActive].image} alt="" /> 
                </StyledContainerImage>
            </StyledContainerInfo>
               
            </div>
        </>
    )
}
export default TechnologyContainer