import React from "react";

export default function InfoIconItem(props) {
  return (
    <div className="mb-16 lg:m-0 flex flex-col items-center lg:items-start justify-center text-center lg:text-left dark:text-gray-200">
      <span className="text-green-500 flex w-full justify-center text-7xl">
        {props.item.icon}
      </span>
      <h2 className="font-bold text-3xl my-3">{props.item.title}</h2>
      <p className="leading-relaxed">{props.item.content}</p>
    </div>
  );
}
