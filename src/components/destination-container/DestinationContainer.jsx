import { v4 } from "uuid"

import { useState } from "react"
import { StyledContainer, StyledContainerDistanceAndTravel, StyledContainerImage, StyledContainerSite, StyledContainerTab, StyledContainerTitle, StyledDestination, StyledDistanceTravel, StyledDistanceTravelInfo, StyledImage, StyledInfoSite, StyledTab, StyledTitle, StyledTitleSite } from "./destination.styles"
import { DESTINATION } from "../../constants/destination"




const DestinationContainer = ()=>{
    const[destinationActive, setDestinationActive]=useState(0)
    return(
        <>
            <StyledDestination>
                <StyledContainer>
                    <StyledContainerTitle>
                        <StyledTitle $color='#464a50' $bold={true}>01</StyledTitle>
                        <StyledTitle $color='white'  >PICK YOUR DESTINATION</StyledTitle>
                    </StyledContainerTitle>
                    <StyledContainerImage>
                       <StyledImage src={DESTINATION[destinationActive].image} alt="" /> 
                    </StyledContainerImage>
                    
                </StyledContainer>
               
                <StyledContainer>
                    <StyledContainerTab>
                    {
                        DESTINATION.map((tab, index)=>(
                            <StyledTab key={v4()} $active={destinationActive===index}  onClick={()=>setDestinationActive(index)}>{tab.name}</StyledTab>
                        ))
                    }
                    
                    </StyledContainerTab>
                    <StyledContainerSite>
                    <StyledTitleSite>{DESTINATION[destinationActive].name}</StyledTitleSite>
                    <StyledInfoSite>{DESTINATION[destinationActive].info}</StyledInfoSite>
                    </StyledContainerSite>
                    <StyledContainerDistanceAndTravel>
                    <div>
                        <StyledDistanceTravel>{DESTINATION[destinationActive].infoDistance}</StyledDistanceTravel>
                        <StyledDistanceTravelInfo>{DESTINATION[destinationActive].distance}</StyledDistanceTravelInfo>
                    </div>
                    <div>
                        <StyledDistanceTravel>{DESTINATION[destinationActive].infoTravel}</StyledDistanceTravel>
                        <StyledDistanceTravelInfo>{DESTINATION[destinationActive].travel}</StyledDistanceTravelInfo>
                    </div>
                    </StyledContainerDistanceAndTravel>
                </StyledContainer>
                
                
            </StyledDestination>
        </>
    )
}
export default DestinationContainer