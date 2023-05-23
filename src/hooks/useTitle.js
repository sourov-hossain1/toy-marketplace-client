import { useEffect } from "react"

const useTitle = title => {
    useEffect(() =>{
        document.title = `Marvel Toys | ${title}`;
    } ,[title])
};

export default useTitle;