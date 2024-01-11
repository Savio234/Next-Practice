import React, { useState } from "react";

const Footer = () => {
    const [imageSrc, setImageSrc] = useState<string>("/svgs/lightModeToggle.svg");
    const handleToggle = () => {
		setImageSrc((currentSrc) =>
		currentSrc === "/svgs/lightModeToggle.svg" ? "/svgs/DarkModeToggle.svg" : "/svgs/lightModeToggle.svg")
		console.log(imageSrc);
	};
    return (
        <div>Footer</div>
    )
}
export default Footer