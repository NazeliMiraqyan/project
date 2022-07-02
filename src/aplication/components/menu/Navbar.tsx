import React from "react";
import Courses from "./Courses";
import "./menu.scss";
import { InitialState } from "../../redux/types";
import { IItemProps } from "../../redux/types";
import { useState } from "react";
import {
  newCategory,
  popularCategory,
  favoriteCategory,
} from "../../redux/action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import line from "../content/img/Line2.png";

const Navbar: React.FC = () => {
  
  const [item, setItem] = useState("popular");
  const [isActive, setActive] = useState(null);
  const [firstItem, setfirstItem] = useState(0);
  

  const dispatch = useDispatch();
  const selector = useSelector((state: InitialState) => state.category.arr);

  const buttonsArray = selector.reduce(
    (acc: any, cur: any) => [
      ...acc.filter((obj: IItemProps) => obj.category !== cur.category),
      cur,
    ],
    []
  );

  const changeData = (category: string, id: any) => {
    if (category === "popular") {
      dispatch(popularCategory(category));
    }

    if (category === "favorite") {
      dispatch(favoriteCategory(category));
    }

    if (category === "new") {
      dispatch(newCategory(category));
    }
    setActive(id);
  };

  return (
    
        <div className="items">
      <div className="title">
        <Courses />
      </div>
      <div className="pages">
        <ul>
          {buttonsArray.map((el: IItemProps, i: number) => {
            return (
              <div key={i}>
                <li>
                  <button
                    onClick={() => changeData(el.category, el.id)}
                    className={
                      isActive == null && firstItem == i
                        ? "active"
                        : isActive === el.id
                        ? "active"
                        : ""
                    }        
                  >
                    <div>
                      {el.category}
                      <div><img src={line} style={{ opacity: "0" }} /></div>
                    </div>
                  </button>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  
    
  );
};
export default Navbar;
