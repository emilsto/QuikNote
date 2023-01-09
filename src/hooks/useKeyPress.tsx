//custom hook to get key press from user
import { useState, useEffect } from "react";


const useKeyPress = ( targetKey1: string):boolean => {
    const [keyPressed, setKeyPressed] = useState<boolean>(false);
    
    const downHandler = ({ key, }: { key: string}) :void => {
        if (key === targetKey1) {
        setKeyPressed(true);
        }
    };
    
    const upHandler = ({ key }: { key: string}) :void => {
        if (key === targetKey1) {
        setKeyPressed(false);
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", downHandler);
        window.addEventListener("keyup", upHandler);
        return () => {
        window.removeEventListener("keydown", downHandler);
        window.removeEventListener("keyup", upHandler);
        };
    }, []);
    
    return keyPressed;
    }

export default useKeyPress;

