import { TokenContext } from "./TokenContext";

export function Providers({children}){
    //const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
    return (
        <TokenContext.Provider>
            {children}
        </TokenContext.Provider>
    )
}