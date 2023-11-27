import Image from 'next/image'



const LogoComponent = ({ className }) => (
    <Image
        src="/images/logo.png"
        height={144}
        width={144}
        alt="DrMeleks Hemlandsfond Logotyp"
        className={className}>
        
    </Image>
);

export default LogoComponent;