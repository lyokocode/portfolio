import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs"
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode } from "../../store/themeSlice";

export const ThemeToggle = () => {
    const dispatch = useDispatch();
    const darkMode = useSelector((state) => state.theme.dark);

    const handleToggleTheme = () => {
        dispatch(setDarkMode());
    };

    return (
        <div className="themeToggle"
            onClick={handleToggleTheme}
            style={
                darkMode === true ? { backgroundColor: "white" } : { backgroundColor: "#0f172a" }
            }
        >
            <BsMoonStarsFill size={14} color="#d1d5db" />

            <div
                className="ball"
                style={
                    darkMode === true
                        ? { left: 1, background: "#0f172a" }
                        : { right: 1, background: "white" }
                }
            >

            </div>

            <BsFillSunFill size={14} color="#eab308" />
        </div>
    )
}
