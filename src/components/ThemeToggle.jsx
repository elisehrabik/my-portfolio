import { useEffect } from "react";

const ThemeToggle = () => {

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        
        // Set initial theme based on preference
        if (mediaQuery.matches)
            document.body.classList.add("dark-mode");
        else
            document.body.classList.remove("dark-mode");
    
        // Listen for changes in preference
        const handleChange = (e) => {
            if (e.matches)
                document.body.classList.add("dark-mode");
            else
                document.body.classList.remove("dark-mode");
          
        };
    
        mediaQuery.addEventListener("change", handleChange);
        
        return () => {
          mediaQuery.removeEventListener("change", handleChange);
        };
    }, []);

    return (
        <jsh></jsh>
    );
}

export default ThemeToggle;
