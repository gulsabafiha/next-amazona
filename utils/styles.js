import { makeStyles } from "@material-ui/core";

const useStyles=makeStyles({
    navbar:{
        backgroundColor:'#300C6C',
        '& a':{
            color: 'white',
            marginLeft:20,
        },

    },
    main:{
        minHeight:'80vh',
    },
    footer:{
        textAlign:'center',
    },
    brand:{
        fontSize:'2 rem',
        fontWeight:'bold'
    },
    grow:{
        flexGrow:1,
    },
});
export default useStyles;