const currentYear = new Date().getFullYear();
const Footer = () => {
  return (
    //Fix this
    <footer className="bg-gray-900 text-white text-center">
      <p className="text-sm"> &#169;{currentYear} ShopEase. All rights reserved</p>
    </footer>
  );
};

export default Footer;
