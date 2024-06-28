import Menu from "../menu/Menu"
import { StyledHeader } from "./header.styles"

const Header =()=>{
    return (
        <>
            <StyledHeader>
                <div>
                   <img src="/images/shared/logo.svg" alt="" /> 
                </div>
                <Menu/>
                
            </StyledHeader>

        </>
    )
}
export default Header