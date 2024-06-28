import { Link } from "react-router-dom"
import { StyledMenu,  StyledNumber } from "./menu.styles"

const Menu =()=>{
    return(
        <>
            <nav>
                <StyledMenu>
                    <li><Link to="/"><StyledNumber>00</StyledNumber> HOME</Link></li>
                    <li><Link to="/destination"><StyledNumber>01</StyledNumber> DESTINATION</Link></li>
                    <li><Link to="/crew"><StyledNumber>02</StyledNumber> CREW</Link></li>
                    <li><Link to="/technology"><StyledNumber>03</StyledNumber>TECNOLOGY</Link></li>
                </StyledMenu>
            </nav>
        </>
    )

}
export default Menu