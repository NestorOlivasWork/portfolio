import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
    return (
        <TypeAnimation
            sequence={[
                "Web Designer & ",
                3000,
                "Solana Developer & ",
                3000,
                "Full-stack Engineer  ",
                3000
            ]}
            speed={70}
            className="Text-[2rem] md:text-[3rem] text-[#55e6a5] font-bold"
            repeat={Infinity}
        />
    );
};

export default TextEffect;