import React from "react";

const FaqCollapse = ({ faq }) => {
  const { question, answer } = faq;
  return (
    <div
      tabIndex={0}
      className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-6 mr-6"
    >
      <div className="collapse-title text-xl font-medium">{question}</div>
      <div className="collapse-content">
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default FaqCollapse;
