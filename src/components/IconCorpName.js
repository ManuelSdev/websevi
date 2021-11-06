import SvgIcon from "@mui/material/SvgIcon";
import CorpName from './../assets/images/corpName.svg'
import Link from '../components/Link'
const IconCorpName = (props) =>
    <Link href="/">
        <SvgIcon component={CorpName} {...props} />
    </Link>




export default IconCorpName