"use client";
import { useState } from "react";
import "./page.css";
import { useDispatch, useSelector } from "react-redux";
import { decremented, incremented } from "../store/couterSlide";
import { Button } from "antd";
import image from "../../asset/img/images.jpg";
import Image from "next/legacy/image";
function about() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const count = useSelector((state) => state.count.value);
  console.log("counter", count);
  function handleCount() {
    dispatch(incremented());
  }
  function handleCountDow() {
    dispatch(decremented());
  }
  return (
    <div>
      <h1>about</h1>
      <p>You clicked {count} times</p>
      <Button className="default" danger onClick={handleCount}>
        Click me +
      </Button>
      <Button className="default" onClick={handleCountDow}>
        Click me -
      </Button>
      <div>
        <Image
          src={image}
          width="50"
          height="50"
          alt="eror"
          className="imagee"
        />
        <img src={image.src} alt="error" />
      </div>
    </div>
  );
}

export default about;
