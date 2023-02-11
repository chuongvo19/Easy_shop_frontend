import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faBell, faPhone, faMagnifyingGlass,
    faCartPlus, faUser, faLocationDot,
    faPhoneFlip 
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGoogle, faFacebook } from '@fortawesome/fontawesome-free-brands'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

library.add( 
    faBell, faEnvelope, faPhone, faFacebookF, faMagnifyingGlass, faCartPlus, faUser,
    faLocationDot, faPhoneFlip, faGoogle, faFacebook
 );
