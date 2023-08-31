import { nanoid } from "nanoid";
import SingleColor from "./SingleColor";

const ColorList = ({ colorList }) => {
	return <section id="color-list">
    {
      colorList.map((color, index) => {
        return (
          <SingleColor key={nanoid()} color={color} index={index}/>
        )
      })
    }
  </section>;
};

export default ColorList;
