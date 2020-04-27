import React, { useContext } from "react";
import { ModuleHistoryContext } from "../../contexts/ModuleHistoryContext";
import Moment from "react-moment";

const ModuleHistory = () => {
  const { historyDatas, historyArray } = useContext(ModuleHistoryContext);
  console.log("History Datas : ", historyDatas);
  console.log("History Array : ", historyArray);
  return (
    <div className="dataBox">
     
      {
        historyDatas ? (
          (historyDatas.find(historyDatas=>historyDatas.name==="module1"))?.data
          .map(
            item => {return (<div>{item.timestamp} </div>)}
          )
          
       ):(
         <p> Please select module</p>
         )
      }
    </div>
  );
};
export default ModuleHistory;
