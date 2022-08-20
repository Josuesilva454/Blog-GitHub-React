import { createStitches, CreateStitches } from "@stitches/react";

export const{styled, globalCss,getCssText} = createStitches({
    theme: {
        colors: {
           title: "#E7EDF4",
           Text: "#AFC2D4", 
           PrimaryShape: "#0B1B28",
           secondaryShape: "112131",
           vacrgraund: "#O71B2B",
           vrand: "#3294F8",
           span: "#7B96B2",

        },

        fonts:{
            default: "Nunito",
        }
    },
});