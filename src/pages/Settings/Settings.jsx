import React, { useState, useCallback } from "react";
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
  const [onPressCheck, setOnPressCheck] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // alert(JSON.stringify(data));
    if (startDate != null && color != "") {
      console.log(
        JSON.stringify(data) +
          " Từ ngày: " +
          moment(startDate).format("DD-MM-YYYY") +
          " đến: " +
          moment(endDate).format("DD-MM-YYYY")
      );
    } else {
      console.log();
    }
  };
  console.log(onPressCheck);
  const [openPickColor, setOpenPickColor] = useState(false);
  const handleShow = () => {
    setOpenPickColor(!openPickColor);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Title</label>
        <input
          {...register("title", {
            required: true,
            minLength: 3,
          })}
        />
        {console.log(errors?.title?.type)}
        {errors?.title?.type === "required" && <p>Không được để trống</p>}
        {errors?.title?.type === "minLength" && (
          <p>Tiêu đề tối thiểu 3 ký tự</p>
        )}
        <label>Email</label>
        <input
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
        />

        {errors?.email?.type === "required" && <p>Không được để trống</p>}
        {errors?.email?.type === "pattern" && <p>Định dạng email không đúng</p>}
        <DatePicker
          selectsRange={true}
          startDate={startDate}
          endDate={endDate}
          onChange={(update) => {
            setDateRange(update);
          }}
          isClearable={true}
        />

        {onPressCheck && <p>Không được để trống</p>}
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
        {/* {errors?.colorPick?.type === "required" && <p>Không được để trống</p>} */}
        {openPickColor && (
          <ColorPicker
            color={color}
            onChange={(color) => setColor(color.hex)}
          />
        )}
        {startDate == null && color === "" ? (
          <div></div>
        ) : (
          <input type="submit" value="Save" />
        )}
      </form>
    </>
  );
};

export default Settings;
