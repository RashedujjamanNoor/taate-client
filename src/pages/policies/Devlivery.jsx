import React from "react";

const Devlivery = () => {
  return (
    <div className="mx-4 mt-8 flex justify-center">
      <div className="max-w-280">
        <h2 className="text-2xl font-light text-gray-700">Delivery Policy</h2>
        <p className="text-sm text-gray-600 text-justify mt-4">
          At TAATE, we ensure your orders are delivered as quickly as possible.
          After placing your order, you’ll receive a confirmation email. <br />{" "}
          <br />
          Expect your delivery within 5 to 8 business days anywhere in
          Bangladesh, with no shipping fees. <br /> <br /> We start processing
          your order within 24 hours. If you need to cancel or change it, please
          contact our Customer Services Department right away at 019XXXXXXXX or
          service@taate.net. When your order arrives, you can check the products
          before receiving. If there’s any issue, reach out to Customer Services
          Department for an immediate return.
        </p>
        <div className="text-sm text-gray-600 text-justify">
          <p className="mt-4 mb-3">Please note:</p>
          <ul className="list-disc list-inside">
            <li>Partial delivery/exchange are not allowed.</li>
            <li>No exchanges for discounted/special offer items.</li>
            <li>Monetary refunds are not available.</li>
          </ul>
        </div>
        <hr className="my-5 max-w-96" />
        <div>
          <p className=" text-sm text-gray-600 text-justify">
            আপনার অর্ডারটি সময়মতো পৌঁছে দিতে আমরা সর্বদাই প্রতিশ্রুতিবদ্ধ।
            অর্ডার দেওয়ার পর, আপনি একটি কনফার্মেশন ইমেইল পাবেন। <br /> <br />{" "}
            বাংলাদেশের যেকোনো স্থানে ৫ থেকে ৮ কার্যদিবসের মধ্যে আপনার অর্ডারটি
            সম্পূর্ণ বিনামূল্যে পৌঁছে দিতে আমরা সর্বাত্মক প্রচেষ্টা করি। ২৪
            ঘণ্টার মধ্যে আমাদের অর্ডার প্রক্রিয়াকরণ শুরু হয়। কোনো অর্ডার বাতিল
            বা পরিবর্তন করতে চাইলে, দয়া করে দ্রুততম সময়ে কাস্টমার সার্ভিসে
            (019XXXXXXXX/service@taate.net) যোগাযোগ করুন। অর্ডারটি হাতে পাওয়ার
            পর, রিসিভ করার আগে আপনি চেক করে নিতে পারবেন। কোনো সমস্যা হলে, সাথে
            সাথে কাস্টমার সার্ভিসে জানান এবং রিটার্ন করুন।
          </p>
        </div>
        <div className="text-sm text-gray-600 text-justify">
          <p className="mt-4 mb-3">উল্লেখ্য:</p>
          <ul className="list-disc list-inside">
            <li>আংশিক ডেলিভারি/পরিবর্তন গ্রহণযোগ্য নয়।</li>
            <li>কোনো ছাড় বা বিশেষ-অফারের প্রোডাক্ট পরিবর্তনযোগ্য নয়।</li>
            <li>ক্রয়কৃত প্রোডাক্টের বিনিময়ে কোনো আর্থিক মূল্য অফেরতযোগ্য।</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Devlivery;
