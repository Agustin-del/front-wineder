import React from 'react'
import { Link } from "react-router-dom";

const AnchorSocialFooter = (props) => {
    const handleLinkClick = (e) => {
        e.preventDefault();
        window.open( props.href,'_blank');
      };
  return (
    <Link to={props.href}> <img className="w-[50px] " onClick={handleLinkClick} src={props.src} alt="img-logo"></img></Link>
  )
}

export default AnchorSocialFooter