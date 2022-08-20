import Document, {Html, Head, Main, NextScript} from "next/document";
import { getCssText } from "../styles";
import React from 'react';
import { globalStyles } from '../styles/global'



export default class CustomDocument extends Document {
render()  {

    return (
        <Html> 
        <Head>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,600&display=swap"
 rel="stylesheet"/>
                <style id="stitches" dangerouslySetInnerHTML={{__html: getCssText ()}}/>
            </Head> 
           <body>
             <Main />
             <NextScript />
           </body>
        </Html>

    )
    
}
}