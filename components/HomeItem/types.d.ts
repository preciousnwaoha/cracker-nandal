import React from "react";

export interface HomeItemProps {
    topText?: string,
    bottomText?: string,
    topIcon?: React.ReactNode,
    bottomIcon?: React.ReactNode,
    routeName: string
}