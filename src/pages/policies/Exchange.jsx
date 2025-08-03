import React from "react";

const Exchange = () => {
  return (
    <div className="mx-4 mt-8 flex justify-center">
      <div className="max-w-220">
        <h2 className="text-2xl font-light text-gray-700">Exchange Policy</h2>
        <p className="text-sm text-gray-600 text-justify mt-4">
          TAATE's exchange policy allows you to exchange any TAATE product
          purchased online within 15 days of receipt, free of charge. Simply
          ensure the product is unused and maintain its original condition,
          tags, and packaging. Exchanges are subject to stock availability{" "}
          <br /> <br />
          To initiate an exchange, contact our Customer Services Department at
          service@taate.net. If you opt for an exchange, return the full parcel
          to our online store and notify our customer service team. We'll
          promptly process your request and resend the full order. <br /> <br />{" "}
          You can also exchange products at any TAATE store.
        </p>
        <div className="text-sm text-gray-600 text-justify">
          <p className="mt-4 mb-3">Please note:</p>
          <ul className="list-disc list-inside">
            <li>
              Products purchased on discounts/special offers cannot be exchanged
              or refunded
            </li>
            <li>
              No exchanges for Pajama, Luxury Saree, Leggings, Dupatta or
              Scarves, Innerwear, Home products, and Accessories.
            </li>
            <li>Monetary refunds are not available.</li>
          </ul>
        </div>
        <hr className="my-5 max-w-96" />
        <div>
          <p className=" text-sm text-gray-600 text-justify">
            অনলাইনে কেনা ইয়েলোর যেকোনো প্রোডাক্ট ক্রয়ের ১৫ দিনের মধ্যে সম্পূর্ণ
            বিনামূল্যে পরিবর্তন করা যাবে। এক্ষেত্রে, প্রোডাক্টটি অব্যবহৃত
            অবস্থায় ট্যাগ সহ মূল প্যাকেজিংয়ে রাখতে হবে এবং সাথে ক্রয়ের রসিদটি
            থাকতে হবে। সকল প্রোডাক্ট পরিবর্তন স্টক-লভ্যতার ওপর নির্ভরশীল।
            <br /> <br /> ক্রয়কৃত প্রোডাক্ট পরিবর্তন করতে চাইলে আমাদের কাস্টমার
            সার্ভিস বিভাগে (service@taate.net) যোগাযোগ করুন এবং সম্পূর্ণ
            পার্সেলটি ইয়েলো অনলাইন স্টোরের ঠিকানায় পাঠিয়ে দিন। আমরা আপনার
            অর্ডারটি পরিবর্তন করে পুনরায় আপনার ঠিকানায় পাঠিয়ে দেব। <br />
            <br />
            আপনি চাইলে, যেকোনো ইয়েলো স্টোর থেকেও প্রোডাক্ট পরিবর্তন করতে পারেন।
          </p>
        </div>
        <div className="text-sm text-gray-600 text-justify">
          <p className="mt-4 mb-3">উল্লেখ্য:</p>
          <ul className="list-disc list-inside">
            <li>কোনো ছাড় বা বিশেষ-অফারের প্রোডাক্ট পরিবর্তনযোগ্য নয়।</li>
            <li>
              পায়জামা, লাক্সারি শাড়ি, লেগিংস, দুপাট্টা, স্কার্ফ,
              আন্ডারগার্মেন্ট, হোম প্রোডাক্ট ও এক্সেসরি পরিবর্তনযোগ্য নয়।
            </li>
            <li>ক্রয়কৃত প্রোডাক্টের বিনিময়ে কোনো আর্থিক মূল্য অফেরতযোগ্য।</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Exchange;
