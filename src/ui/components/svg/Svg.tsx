import { SVGProps } from 'react';

const Svg = ({ height, width, ...props }: SVGProps<SVGSVGElement>) => (
    <>
        <svg
            width={width}
            height={height}
            {...props}
            viewBox="0 0 50 50"
            xmlns="http://www.w3.org/2000/svg"
            role="icon"
        >
            <path
                d="M 25.000003,0 A 24.999919,25.069736 0 0 0 0,25.069718 24.999919,25.069736 0 0 0 25.000003,50.139433
                   24.999919,25.069736 0 0 0 50.000002,25.069718 24.999919,25.069736 0 0 0 25.000003,0 Z m 0,2.9603534
                   A 22.047609,22.109182 0 0 1 47.047733,25.069718 22.047609,22.109182 0 0 1 25.000003,47.178743
                   22.047609,22.109182 0 0 1 2.9522714,25.069718 22.047609,22.109182 0 0 1 25.000003,2.9603534 Z M
                   35.935461,9.6418619 C 33.106381,9.6235944 30.505053,9.6572124 24.839691,9.9325103 17.285877,10.29958
                   9.5583932,13.999308 9.2902569,19.497922 9.0221215,24.996533 12.736454,26.900619 14.3562,28.689498 l
                   8.047515,6.918944 c 2.973745,2.772078 4.05986,4.499681 5.326615,7.989586 2.890844,-3.094229 3.135968,
                   -7.096309 -0.868573,-11.116313 l -8.713341,-8.163369 c -3.564606,-3.03858 -3.442145,-7.763393
                   0.02896,-10.044994 3.471106,-2.281605 5.160058,-2.633725 10.363596,-3.329136 -4.583038,0.979028
                   -8.864801,2.232775 -10.594632,5.192576 -1.72983,2.959797 0.833603,6.17309 3.272554,8.038756 l
                   5.932496,4.658769 c 3.030103,2.792996 4.549764,5.051855 5.094907,8.221295 2.186164,-4.105015
                   2.174879,-7.610397 -0.636863,-10.421184 0,0 -2.755705,-2.267926 -6.064853,-5.384543 -3.30915,
                   -3.11662 -1.991218,-6.002178 2.069891,-8.105778 3.999337,-2.058597 7.678182,-2.824686 11.348021,
                   -3.4736173 -1.115526,-0.010534 -2.08401,-0.022527 -3.027037,-0.028624 z"
                fill={props.color}
            />
        </svg>
    </>
);

export default Svg;