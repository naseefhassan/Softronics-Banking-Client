import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function InfoCard({ Head, Description, Button, path }) {
  return (
    <div className="flex flex-wrap p-5 gap-5 justify-center  items-center ">
      <div className="bg-gray-400 w-72 h-52 p-3 rounded-md m-2 2xl:w-[500px] 2xl:h-[350px] 2xl:text-4xl text-[27px]  text-center flex flex-col justify-around">
        <h1 className="font-bold">{Head}</h1>
        <h1 className="text-sm">{Description}</h1>
        <Link to={path}>
          <button className="bg-orange-500 p-1 rounded-md my-2 px-3 text-[15px] font-bold  w-24 self-center">
            {Button}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default InfoCard;
