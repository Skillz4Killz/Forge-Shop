import Image from "next/image";

const HeaderLogo = () => {
  return (
    <div className="relative" style={{ top: "10px" }}>
      <Image src="/images/Logo.png" alt="Logo" width={50} height={25} />
    </div>
  );
};

export default HeaderLogo;
