import { createContext, useContext, useState, type ReactNode } from "react";

interface MyContextType {
    tempCounter:number,
    setTempCounter:React.Dispatch<React.SetStateAction<number>>;
}

interface MyContextProps {
    children:ReactNode
}

const MyContext = createContext<MyContextType | undefined>(undefined);

function MyContextProvider({children}:MyContextProps){
    const [tempCounter,setTempCounter] = useState<number>(0);
    return <MyContext.Provider value={{tempCounter,setTempCounter}}>
{children}
    </MyContext.Provider>
}

function useMyContext(){
    const context = useContext(MyContext);
     if (!context) {
        throw new Error("useMyContext must be used within a MyContextProvider");
    }
    return context;
}

// eslint-disable-next-line
export {MyContextProvider,useMyContext};