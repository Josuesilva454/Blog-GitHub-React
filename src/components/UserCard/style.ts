import { styled } from "../../../styles";

export const UserCardContainer= styled("div",{
    backgroundColor: "$PrimaryShape",
    width: "100%",
    padding: "32px, 40px",
    display: "flex",
    alignItems: "center",
    gap: "32px",
    borderRadius: "32px",
    marginTop: "-80px",


    img: {
        width: "148px",
        height: "148px",
        border: "1px solid $brand",
        borderRadius: "8px",


    }

});

export const UserCardContent= styled("div",{


});

export const UserCardNameContainer= styled("div",{
  display: "flex",
  justifyContent: "space-between",
  alignItems:"center",
  width: "100%",
a: {
    display: "flex",
    alignItems: "center",
    color: "$vrand",
    textDecoration: "none",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: "12px",

    svg: {
        marginLeft: "8px",
    },
},

});

export const UserCardInfo= styled("div",{
    display: "flex",
    justifyContent: "space-between",
    alignItems:"center",
    width: "100%",
  a: {
      display: "flex",
      alignItems: "center",
      color: "$vrand",
      textDecoration: "none",
      textTransform: "uppercase",
      fontWeight: "bold",
      fontSize: "12px",
  
      svg: {
          marginLeft: "8px",
      },
  },
  
  });
  

