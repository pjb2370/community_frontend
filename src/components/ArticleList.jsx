import React from "react";

const ArticleList = ({ articles }) => {
  return (
    <div className="overflow-x-auto flex justify-center mt-16">
      <table className="max-w-5x1 table table-compact w-full">
        <thead>
          <tr>
            <th></th>
            <th>제목</th>
            <th>작성 일시</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article, index) => (
            <ArticleListItem key={index} article={article} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArticleList;
