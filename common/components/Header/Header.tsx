import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {NavButton} from "../NavButton/NavButton.ts";
import Switch from "@mui/material/Switch";
import {useAppSelector} from "../../hooks/useAppSelector";
import {selectThemeMode} from "@/app/app-selectors.ts";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {getTheme} from "../../theme/theme";
import {changeThemeModeAC} from "@/app/app-reducer.ts";
import {containerSx} from "../../styles/container.styles.ts";

export const Header = () => {
    const themeMode = useAppSelector(selectThemeMode)
    const theme = getTheme(themeMode)
    const dispatch = useAppDispatch()



    const changeMode = () => {
        dispatch(changeThemeModeAC(themeMode === 'light' ? 'dark' : 'light'))
    }

    return (
        <AppBar position="static" sx={{mb: '30px'}}>
            <Toolbar>
                <Container maxWidth={'lg'} sx={containerSx}>
                    <IconButton color="inherit">
                        <MenuIcon/>
                    </IconButton>
                    <div>
                        <NavButton>Sign in</NavButton>
                        <NavButton>Sign up</NavButton>
                        <NavButton background={theme.palette.primary.dark}>Faq</NavButton>
                        <Switch color={'default'} onChange={changeMode} />
                    </div>
                </Container>
            </Toolbar>
        </AppBar>
    );
};
