import { makeStyles } from "@material-ui/core";

const useStyles=makeStyles({
    navbar:{
        backgroundColor:'#300C6C',
        '& a':{
            color:'#189A95',
            marginLeft:10,
        },

    },
    main:{
        minHeight:'80vh',
    },
    footer:{
        textAlign:'center',
    }
});
export default useStyles;