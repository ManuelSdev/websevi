
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from '@mui/material/styles';

const useBreakpoints = () => {

    const theme = useTheme();

    const md950Up = useMediaQuery(theme.breakpoints.up('md950'));
    const sm750Up = useMediaQuery(theme.breakpoints.up('sm750'));

    return {
        md950Up,
        sm750Up
    }
}

export default useBreakpoints