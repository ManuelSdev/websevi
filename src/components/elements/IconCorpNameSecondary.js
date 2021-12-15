import SvgIcon from "@mui/material/SvgIcon";
import CorpName from '../../assets/images/corpNameSecondary.svg'
import Link from './Link'
//TODO: mirar como cambiar el color  de corpNameSecondary.svg cambiando  
//  <style>.cls-1{fill:#FFFFFF;}.cls-2{fill:#1f140f;}</style>
//mediante props
const IconCorpName = (props) =>
    <Link href="/">
        <SvgIcon component={CorpName} {...props} />
    </Link>




export default IconCorpName