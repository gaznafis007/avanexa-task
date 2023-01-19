import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import FaqCollapse from "../FaqCollapse/FaqCollapse";

const Faq = () => {
  const [faqs, setFaq] = useState([]);
  const [faqCategories, setFaqCategory] = useState([]);
  async function loadFaq(category) {
    const res = await fetch(
      `https://products-server-side.vercel.app/faq/?faqCategory=${category}`
    );
    const data = await res.json();
    console.log(data);
    setFaq(data);
  }
  const handleFaqCategory = (category) => {
    console.log(category);
    loadFaq(category);
  };
  useEffect(() => {
    fetch("https://products-server-side.vercel.app/faq")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFaq(data);
      });
  }, []);
  useEffect(() => {
    // fetch("https://products-server-side.vercel.app/faq")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setFaq(data);
    //   });
    // loadFaq();
    fetch("https://products-server-side.vercel.app/faqCategory")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFaqCategory(data);
      });
  }, [faqs]);
  return (
    <div>
      <h2 className="text-3xl text-center text-red-500">FAQ</h2>
      <div className="flex flex-col md:flex-row">
        <div className="w-1/3 px-6">
          <h2 className="text-2xl text-center mb-4">FAQ category</h2>
          <ul>
            {faqCategories.map((faqCategory) => (
              <>
                <li
                  key={faqCategory.faq_cat_id}
                  onClick={() => handleFaqCategory(faqCategory.name)}
                  className="py-4 btn-ghost text-center font-semibold text-xl"
                >
                  {faqCategory.name}
                </li>
              </>
            ))}
          </ul>
        </div>
        <div className="w-2/3">
          {faqs.map((faq) => (
            <FaqCollapse key={faq.faq_id} faq={faq}></FaqCollapse>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
