

Install 
- next js , 
- shadcn (add a button and try),
= acertanity UI (floating nav  bar) follow guide from installation 
    - floating navbar 
    - wave background
    - parallax scroll 
    - adding : className="scroll-smooth" in layout.tsx html tag for smooth scrolling,
                routing: routing a page or section only requires it's tag or id "#projects" is projects.tsx which helps to link a seaction to floating navbar using the nav-links

    new section added : Hero Section , Project sections 


    using acretainiy : Sparkel , Text generation effects added for contact and about section





    #Debugging error
    ## Error: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any ---- Error
    - Sometimes because of the legacy code or some dependency package, there are line line "resize as any" this will cause the error above . 
    - For this we need to use the 

                // eslint-disable-next-line @typescript-eslint/no-explicit-any  
                    const myVariable: any = someValue;

                    to skip this line to check for type which helps to by pass this error. The line which causes any type error , comment the command over it and it will be resolved 


    #Deployment Details
    




