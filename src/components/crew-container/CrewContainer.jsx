import { useState } from "react"
import { CREWS } from "../../constants/crews"
import { StyledCircle, StyledContainerCircle, StyledContainerCrew, StyledContainerImage, StyledContainerInfo, StyledContainerLeft, StyledContainerTitle, StyledImage, StyledInfo, StyledName, StyledPosition, StyledTitle } from "./crewContainer.styles"
import { v4 } from "uuid"

const CrewContainer =()=>{
    const[crewActive, setCrewActive]=useState(0)
    return(
        <>
            <StyledContainerCrew>

                <StyledContainerLeft>
                    <StyledContainerTitle>
                    <StyledTitle $color='#464a50' $bold={true}>02</StyledTitle>
                    <StyledTitle $color='white'  >MEET YOUR CREW</StyledTitle>
                    </StyledContainerTitle>

                    <StyledContainerInfo>

                    <StyledPosition>{CREWS[crewActive].position}</StyledPosition>
                    <StyledName>{CREWS[crewActive].name}</StyledName>
                    <StyledInfo>{CREWS[crewActive].info}</StyledInfo>
                    </StyledContainerInfo>

                    <StyledContainerCircle>
                    {
                        CREWS.map((crew, index)=>(
                            <StyledCircle key={v4()} $active={crewActive===index} onClick={()=>setCrewActive(index)}></StyledCircle>
                        ))
                        

                    }
                    
                    </StyledContainerCircle>
                </StyledContainerLeft>
                
                <StyledContainerImage>
                    <StyledImage src={CREWS[crewActive].image} alt="" />
                </StyledContainerImage>  
               
                
                
                
            </StyledContainerCrew>  
        </>
    )
}
export default CrewContainer