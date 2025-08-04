const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <footer className="p-5 h-15 bg-black text-center text-sm text-neutral-500 dark:text-neutral-400"> 
        Made with Aceternity UI {year}
        </footer>
    )
}
export default Footer;