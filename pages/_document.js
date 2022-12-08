import { ServerStyleSheets } from "@material-ui/core/styles";
import App from "next/app";
import Document, {Html, Main, Head, NextScript } from "next/document";
import React from "react";


export default class MyDocument extends Document{
    render(){
        return (
            <Html lang="en">
                <Head>
                    <link
                    rel="stylesheet"
                    href="https://googleapis.com/css?family=Roboto-300,400,500&display=swap"
                    />
                </Head>
                <body>
                    
                    <Main></Main>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}
MyDocument.getInitialProps=async(ctx)=>{
    const sheets=new ServerStyleSheets();
    const originalRenderPage=ctx.renderPage;
    ctx.renderPage=()=>{
        return originalRenderPage({
            enhanceApp:(App)=>(props)=> sheets.collect(<App {...props}/>),
        });
    };
    const initialProps=await Document.getInitialProps(ctx)
    return{
        ...initialProps,
        styles:[
            ...React.Children.toArray(initialProps.styles),
            sheets.getStyleElement(),
        ],
    };

};