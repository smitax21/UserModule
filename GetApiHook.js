import { useEffect, useState } from "react";

const useApi = (url) => {
  //const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [data1, setData1] = useState(null);
  

  const fetchApi = () => {
    fetch(url) // 'https://jsonplaceholder.typicode.com/users'
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
       // setLoading(false);
         setData(json.adminAreas);
         setData1(json.localities);
    
      //  console.log(json.adminAreas)
       
      });
  };

  useEffect(() => {
    fetchApi();
    
  }, []);

  return {data,data1};
};

export default useApi;