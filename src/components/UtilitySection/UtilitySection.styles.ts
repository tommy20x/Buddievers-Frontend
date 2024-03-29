import { Theme } from '@mui/material';

export const styles = (theme: Theme) => ({
    container: {
        width: "100%",
        background: "#FFF",
        textAlign: "center",
        paddingBottom: "4vh"
    },
    titleText: {
        fontSize: "90px",
        fontWeight: "900",
        color: "#00CE4C",
    },
    leftContainer: {
        background: "#FFF",
        textAlign: "left",
        padding: "2vh"
    },
    subTitleText: {
        marginTop : "80px",
        marginBottom : "20px",
        fontWeight: "900",
        fontSize: "45px",
        "@media (max-width : 1910px)" : {
            marginTop : "0px",
        }
    },
    mainText: {
        fontWeight: "700",
        fontSize: "24px",
        margin: "0px",
        marginTop : "50px",
        "@media (max-width : 1910px)" : {
            marginTop : "20px",
        }
    },
    leftTextWrapper : {
        width : '60%',
        margin : "auto",
        "@media (max-width : 1910px)" : {
            width : "80%"
        }
    }
});
