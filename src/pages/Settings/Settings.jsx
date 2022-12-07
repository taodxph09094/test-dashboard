import React, { useState, useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import "../../assets/css/setting.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ColorPicker from "react-pick-color";
import { Button } from "@shopify/polaris";
import * as moment from "moment";
const Settings = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [color, setColor] = useState("#E00202");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onPressSubmit = () => {
    console.log(
      "title: " +
        title +
        ", " +
        "email: " +
        email +
        ", " +
        " Từ ngày: " +
        moment(startDate).format("DD-MM-YYYY") +
        " đến: " +
        moment(endDate).format("DD-MM-YYYY") +
        ", " +
        "color: " +
        color
    );
  };
  const [openPickColor, setOpenPickColor] = useState(false);
  const handleShow = () => {
    setOpenPickColor(!openPickColor);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onPressSubmit)}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {title === "" && <p>Không được để trống</p>}
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {email === "" && <p>Không được để trống</p>}
        <label>Active date</label>
        <DatePicker
          selectsRange={true}
          startDate={startDate}
          endDate={endDate}
          onChange={(update) => {
            setDateRange(update);
          }}
          isClearable={true}
        />

        {startDate === null ? (
          <p>Không được để trống</p>
        ) : (
          endDate === null && <p>Chưa chọn ngày kết thúc</p>
        )}

        <label>Background Color</label>
        <div className="pickColor">
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <div
            className="d"
            style={{ backgroundColor: color }}
            onClick={handleShow}
          ></div>
        </div>
        {color === "" && <p>Không được để trống</p>}

        {openPickColor && (
          <ColorPicker
            color={color}
            onChange={(color) => setColor(color.hex)}
          />
        )}
        {startDate == null && color === "" && title === "" && email === "" ? (
          <div></div>
        ) : (
          <input type="submit" value="Save" />
        )}
      </form>
    </>
  );
};

export default Settings;
