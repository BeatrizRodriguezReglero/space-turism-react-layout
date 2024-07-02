import { useLocation } from "react-router-dom"
import { StyledLink, StyledMenu,  StyledNumber } from "./menu.styles"

const Menu =()=>{
    const location = useLocation();
    return(
        <>
            <nav>
                <StyledMenu>
                    <li><StyledLink to="/" ><StyledNumber>00</StyledNumber> HOME</StyledLink></li>

                    <li><StyledLink to="/destination" ><StyledNumber>01</StyledNumber> DESTINATION</StyledLink></li>

                    <li><StyledLink to="/crew" ><StyledNumber>02</StyledNumber> CREW</StyledLink></li>

                    <li><StyledLink to="/technology" ><StyledNumber>03</StyledNumber>TECNOLOGY</StyledLink></li>

                </StyledMenu>
            </nav>
        </>
    )

}
export default Menu