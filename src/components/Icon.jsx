import { IconType } from "../utilities/IconType";

import {
   WiCloud,
   WiCloudy,
   WiDayRain,
   WiRain,
   WiDaySunny,
   WiThunderstorm,
} from "react-icons/wi";

function Icon({ iconType }) {
   let className = "w-full my-5 text-[5rem]";

   switch (iconType) {
      case IconType.LIGHT_RAIN:
         return <WiDayRain className={className} />;
      case IconType.MODERATE_RAIN:
         return <WiRain className={className} />;
      case IconType.HEAVY_RAIN:
         return <WiThunderstorm className={className} />;
      case IconType.LIGHT_CLOUD:
         return <WiDaySunny className={className} />;
      case IconType.MODERATE_CLOUD:
         return <WiCloud className={className} />;
      case IconType.HEAVY_CLOUD:
         return <WiCloudy className={className} />;
      default:
         break;
   }
   return <></>;
}

export default Icon;
