import React from "react";
import { CiTrash } from "react-icons/ci";

const PostCard = () => {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  return (
    <div className="w-1/3 bg-[#f7f7f7] rounded-lg px-4 py-6 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">This is the title.</h2>
        <CiTrash className="text-2xl cursor-pointer text-red-600" />
      </div>
      <hr />
      <p>
        Newbreak Church partners with you and your family. Every week we send
        out an email providing helpful links to the week's content, guides for
        kids and students so they can follow along at home, as well as updated
        news and information that are important to Newbreak Church as a whole
        and specific to our campuses across San Diego County.
      </p>

      <hr />

      <div className="flex justify-between items-center">
        <h3 className="font-bold">@Saqib Zaman</h3>
        <p className="text-sm">{date}</p>
      </div>
    </div>
  );
};

export default PostCard;
