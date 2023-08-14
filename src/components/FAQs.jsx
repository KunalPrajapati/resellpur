import React, { useState } from "react";

const FAQs = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  return (
    <div className="mt-10 flex justify-center p-5">
      <div className="w-[1080px]">
        <h1 className="text-left text-2xl font-bold">FAQs</h1>
        <div className="flex flex-col mt-4">
          <div className="">
            <p className="text-left mt-1 text-xs">
              What's the process of buying and selling second-hand products?
            </p>
            <button
              onClick={() => setShow(!show)}
              className="w-20 mt-1 bg-blue-500 text-white rounded-md text-xs">
              {show ? "Hide" : "Show"}
            </button>
          </div>
          {show && (
            <div
              className={`mt-4 p-4 bg-white border rounded-lg shadow-md w-full transition-max-height ${
                show
                  ? "max-h-[1000px] opacity-100 ease-in duration-300"
                  : "max-h-0 opacity-0 ease-out duration-300"
              } overflow-hidden`}
            >
              <p id="accord-info">
                <span className="font-bold">Buying Process:</span>
                <br />
                - Explore Listings: Browse diverse categories and filter options
                to find items you want. <br />
                - Check Details: Review detailed item descriptions and images
                provided by sellers. <br />
                - Contact Seller: Reach out to sellers for any questions or
                clarifications. <br />
                - Purchase Securely: Make a secure payment through the platform
                to complete the purchase. <br />
                - Delivery: Enjoy hassle-free delivery, tracked if using our
                service. <br />
                - Rate and Review: Share your experience by rating and reviewing
                the seller. <br />
                <br />
                <span className="font-bold">Selling Process:</span>
                <br />
                - Create Listing: List your item with clear descriptions and
                images. <br />
                - Respond to Inquiries: Engage with potential buyers and address
                their queries promptly. <br />
                - Receive Payment: Get paid securely through the platform once a
                buyer commits. <br />
                - Pack and Ship: Prepare the item carefully for shipment or use
                our delivery service. <br />
                - Buyer Feedback: Buyers can rate and provide feedback on the
                transaction. <br />
              </p>
            </div>
          )}
        </div>
        <div className="mt-4">
            <div className="">
                <p className="text-left mt-1 text-xs">Why to choose us?</p>
                <button
                    onClick={() => setShow1(!show1)}
                    className="w-20 mt-1 bg-blue-500 text-white rounded-md text-xs"
                >
                    {show1 ? "Hide" : "Show"}
                </button>
            </div>
            {show1 && (
                <div className="mt-4 p-4 bg-white border rounded-lg shadow-md w-full transition-max-height overflow-hidden">
                    <p
                        id="accord-info"
                        className="text-gray-800 leading-relaxed"
                    >
                        <span className="block mb-4">
                            🌟 Safe and Secure Transactions: Say goodbye to worries about scams and fraud. Resellpur's robust security measures ensure that every transaction is safe and secure, giving you peace of mind while trading your pre-loved items.
                        </span>
                        <span className="block mb-4">
                            🌐 User-Friendly Interface: Our intuitive platform makes buying and selling a breeze, even for those new to online marketplaces. List your items with ease, and find the perfect gems from other sellers effortlessly.
                        </span>
                        <span className="block mb-4">
                            🚚 End-to-End Delivery Services: We take care of the logistics for you! Our seamless delivery services ensure that your items reach buyers or sellers promptly and safely, making the entire process hassle-free.
                        </span>
                        <span className="block mb-4">
                            🌎 Contributing to Sustainability: Join us in building a more sustainable future. By promoting the reuse and repurposing of items, Resellpur is an active participant in the circular economy, reducing waste and carbon footprint.
                        </span>
                        <span className="block mb-4">
                            💼 Variety of Categories: From fashion and electronics to furniture and collectibles, Resellpur caters to a wide range of categories. Whatever you're looking for or looking to sell, you'll find your place here.
                        </span>
                        <span className="block mb-4">
                            📷 High-Quality Listings: Our platform encourages sellers to provide detailed descriptions and high-quality images. This means buyers can make informed decisions and sellers can showcase their items effectively.
                        </span>
                        <span className="block mb-4">
                            📱 Mobile App: Take Resellpur with you wherever you go! Our mobile app lets you manage your listings, purchases, and sales on the move.
                        </span>
                        <span className="block mb-4">
                            👥 Engaged Community: Connect with like-minded individuals who value sustainability and smart consumer choices. Our community is built on trust, collaboration, and a shared passion for reducing waste.
                        </span>
                        <span>
                            🏆 Exceptional Customer Support: Have questions or need assistance? Our responsive customer support team is here to help you every step of the way, ensuring a smooth and enjoyable experience.
                        </span>
                    </p>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
