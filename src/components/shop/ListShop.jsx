import React from "react";

export default function ListShop(props) {
    const { dataShop } = props;
    console.log(dataShop);
    const item = dataShop.map((element, index) => {
        return (
            <div key={index}>
                {element.name}
            </div>
        )
    });
    return(
        <React.Fragment>{item}</React.Fragment>
    )

}