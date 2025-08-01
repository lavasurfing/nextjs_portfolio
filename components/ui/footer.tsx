const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <footer className="p-5 h-15 bg-black text-center text-sm text-neutral-500 dark:text-neutral-400"> 
        Made with Axe {year}
        </footer>
    )

}

export default Footer;