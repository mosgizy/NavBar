import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";

const SocialIcons = () => {
  return (
    <div className='gap-4 text-base text-green-800 hidden md:flex'>
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faTwitter} />
    </div>
  )
}

export default SocialIcons
