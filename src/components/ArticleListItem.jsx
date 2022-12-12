import React from "react";

const ArticleList = ({ article }) => {
  const navigate = useNavigate();
  const { id, title, body, createDate, updatedDate } = article;
  return (
    <tr
      className="cursor-pointer"
      onClick={() => {
        navigate(`/detail/${id}`);
      }}
    >
      <th>{id}</th>
      <tb>{title}</tb>
      <tb>{FormData(createDate)}</tb>
    </tr>
  );
};

export default ArticleList;
